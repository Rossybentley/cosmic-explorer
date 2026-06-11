import { useAsteroids } from "../hooks/useAsteroids";
import "../styles/Asteroids.css";

function Asteroids() {
  const { asteroids, loading } = useAsteroids();

  const hazardousCount = asteroids.filter(
    (a) => a.is_potentially_hazardous_asteroid,
  ).length;

  const safeCount = asteroids.length - hazardousCount;

  if (loading) {
    return <h2>Scanning Space...</h2>;
  }

  return (
    <div className="asteroids-page">
      <h1>☄️ Near Earth Objects</h1>

      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Asteroids</h3>
          <p>{asteroids.length}</p>
        </div>

        <div className="stat-card">
          <h3>Hazardous</h3>
          <p>{hazardousCount}</p>
        </div>

        <div className="stat-card">
          <h3>Safe</h3>
          <p>{safeCount}</p>
        </div>
      </div>

      <div className="asteroids-grid">
        {asteroids.map((asteroid) => {
          const approach = asteroid.close_approach_data[0];

          return (
            <div
              key={asteroid.id}
              className="asteroid-card"
              style={{
                border: asteroid.is_potentially_hazardous_asteroid
                  ? "2px solid red"
                  : "2px solid lime",
              }}
            >
              <h2>{asteroid.name}</h2>

              <p
                style={{
                  color: asteroid.is_potentially_hazardous_asteroid
                    ? "red"
                    : "lime",
                }}
              >
                {asteroid.is_potentially_hazardous_asteroid
                  ? "🚨 Hazardous"
                  : "✅ Safe"}
              </p>

              <p>
                Velocity:{" "}
                {Math.round(
                  Number(approach.relative_velocity.kilometers_per_hour),
                ).toLocaleString()}
                km/h
              </p>

              <p>
                Miss Distance:{" "}
                {Math.round(
                  Number(approach.miss_distance.kilometers),
                ).toLocaleString()}
                km
              </p>

              <p>Date: {approach.close_approach_date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Asteroids;

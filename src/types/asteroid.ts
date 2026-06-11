export interface Asteroid {
  id: string;
  name: string;
  is_potentially_hazardous_asteroid: boolean;

  estimated_diameter: {
    meters: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
  };

  close_approach_data: {
    relative_velocity: {
      kilometers_per_hour: string;
    };
    miss_distance: {
      kilometers: string;
    };
    close_approach_date: string;
  }[];
}

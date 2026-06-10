import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mars from "./pages/Mars";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mars" element={<Mars />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

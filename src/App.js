import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favourites from "./components/Favourites";
import { Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to="/" className="btn mt-2">
        Home
      </Link>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
      </Routes>
      <Routes>
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

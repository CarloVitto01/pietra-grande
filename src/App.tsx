import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RoomsPage from "./pages/RoomsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/camere" element={<RoomsPage />} />
    </Routes>
  );
}
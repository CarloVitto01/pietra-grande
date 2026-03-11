import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RoomsPage from "./pages/RoomsPage";
import ScrollToTop from "./components/common/ScrollToTop";
import RestaurantPage from "./pages/RestaurantPage";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/camere" element={<RoomsPage />} />
        <Route path="/ristorante" element={<RestaurantPage />} />
      </Routes>
    </>
  );
}
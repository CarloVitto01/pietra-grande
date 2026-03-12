import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RoomsPage from "./pages/RoomsPage";
import ScrollToTop from "./components/common/ScrollToTop";
import RestaurantPage from "./pages/RestaurantPage";
import ContactsPage from "./pages/ContactsPage";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/camere" element={<RoomsPage />} />
        <Route path="/ristorante" element={<RestaurantPage />} />
        <Route path="/contatti" element={<ContactsPage />} />
      </Routes>
    </>
  );
}
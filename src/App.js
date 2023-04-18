import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Weather from './pages/Weather';
import TourList from './pages/TourList';
import TourDetail from './pages/TourDetail';
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/go-to-jeju" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/jeju-tour/list/:pageNum" element={<TourList />} />
        <Route path="/jeju-tour/detail/:contentId" element={<TourDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

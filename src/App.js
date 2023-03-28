import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Weather from './pages/Weather';
import TourList from './pages/TourList';
import TourDetail from './pages/TourDetail';

function App() {
  return (
    <div>
      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/jeju-tour/list" element={<TourList />} />
        <Route path="/jeju-tour/detail/:tourId" element={<TourDetail />} />
      </Routes>
    </div>
  );
}

export default App;

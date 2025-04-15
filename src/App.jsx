import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Activities from "./pages/Activities/Activities";
import Getstarted from "./pages/Activities/Getstarted";
import Starfallstore from "./pages/Starfallstore/Starfallstore";
import Cart from "./pages/Starfallstore/Cart";
import Settings from "./pages/Settings/Settings";
import Earnings from "./pages/Settings/Earnings";
import About from "./pages/Settings/About";
import Privacy from "./pages/Settings/Privacy";
import Surveys from "./pages/Surveys/Surveys";
import Start_Survey from "./pages/Surveys/Start_Survey";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/Getstarted" element={<Getstarted />} />
          <Route path="/Starfallstore" element={<Starfallstore />} />
          <Route path="/Starfallstore/Cart" element={<Cart />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Settings/earnings" element={<Earnings />} />
          <Route path="/Settings/about" element={<About />} />
          <Route path="/Settings/privacy" element={<Privacy />} />
          <Route path="/surveys" element={<Surveys />} />
          <Route path="/surveys/start" element={<Start_Survey />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import React from "react";
import { Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

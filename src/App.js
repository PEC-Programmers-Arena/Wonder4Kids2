import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <Home />
      <Footer />
    </div>
  );
}

export default App;

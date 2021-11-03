import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Body from "./components/Body/Body";
// import Header from "./components/Header/Header"
// import Login from "./components/Login/Login"
import NavBar from "./components/Navbar/Navbar";
import Login from './components/Login/Login';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar/>
      <Login />
      <Footer />
    </>
  )
}

export default App;
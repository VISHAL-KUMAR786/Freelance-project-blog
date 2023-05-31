import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  Contact,
  About,
  Clients,
  Services,
  Industries,
  Error,
  Help,
  Login,
} from "./pages";
import { Navbar, Footer } from "./components";

//* Styles
import "./assets/styles/home.css";
import "./assets/styles/index.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/clients"} element={<Clients />} />
        <Route path={"/services"} element={<Services />} />
        <Route path={"/industries"} element={<Industries />} />
        <Route path={"/help"} element={<Help />} />
        <Route path={"/login"} element={<Login isActive={true} />} />
        <Route path={"/signup"} element={<Login isActive={false} />} />
        <Route path={"*"} element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import "./css/app.css";
import logo from "./img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <div id="header">
        <img src={logo} alt="آریا کاور تولید کننده کاور انواع پرینتر" id="logo" /> {/*logo*/}
      </div>
      <About></About>
    </>
  );
};

export default App;

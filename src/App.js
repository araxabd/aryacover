import { useState, useEffect } from "react";
import "./App.css";
import logo from "./img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <>
      <div id="header"><img src={logo} alt="آریا کاور تولید کننده کاور انواع پرینتر" id="logo" /> {/*logo*/}</div>
    </>
  );
};

export default App;

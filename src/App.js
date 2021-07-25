import { useState, useEffect } from "react";
import "./App.css";
import logo from "./img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  // make states
  const [mbicon, setmbicon] = useState(<FontAwesomeIcon icon={faBars} />);
  const [mbturn, setmbturn] = useState(0);
  // handle button click for menu
  const menuClickHandler = (e) => {
    if (mbturn === 0)
    {
      setmbicon(<FontAwesomeIcon icon={faTimes} />); // change icon 
      setmbturn(1); // change turn to next step
    } else {
      setmbicon(<FontAwesomeIcon icon={faBars} />); // change icon to default
      setmbturn(0); // set turn to default
    }
  };

  return (
    <>
      <img src={logo} alt="آریا کاور تولید کننده کاور انواع پرینتر" id="logo" /> {/*logo*/}
      <button onClick={menuClickHandler} id="menu-icon"> {/*menu button*/}
        {mbicon}
      </button>
    </>
  );
};

export default App;

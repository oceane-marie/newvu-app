import React, { useContext } from 'react';
import Navbar from "../components/Navbar";
import {DarkModeContext} from '../DarkModeContext';
import Experience from "../components/Experience";
import data from "../experiencesData";


export default function Single() {

  const {darkMode, toggleDarkMode} = useContext(DarkModeContext)

  const experience = {...data}
  console.log(experience)

  return(
    <div className={darkMode ? "dark" : ""}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Experience darkMode={darkMode}/>
    </div>
  )
};

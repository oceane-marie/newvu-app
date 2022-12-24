import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import data from '../data/experiencesData';
import React, {useContext} from 'react';
import { DarkModeContext } from "../context/DarkModeContext";

export default function App() {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext)

  const cards = data.map(experience => {
    return < Card
    key={experience.id}
    {...experience}
    />
  } )

  return(
    <div>
    <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
    <Hero darkMode={darkMode}/>
    <div className={`card-wrapper ${darkMode ? "dark" : ""}`}>
      {cards}
    </div>
  </div>
  )
};

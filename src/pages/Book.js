import Navbar from '../components/Navbar';
import Form from '../components/Form';
import React, { useContext } from 'react';
import { DarkModeContext } from '../DarkModeContext';

export default function Book() {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext)

  return(
    <div className={darkMode ? "dark" : ""}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <div className='ctr-centered'>
        <Form darkMode={darkMode}/>
      </div>

    </div>

  )
};

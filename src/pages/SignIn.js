import Navbar from "../components/Navbar";
import SignInForm from "../components/SignInForm";
import React, { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

export default function SignIn() {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext)

  return(
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <SignInForm darkMode={darkMode} />
    </>
  )
};

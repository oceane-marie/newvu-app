import { useContext } from "react";
import {DarkModeContext} from "../context/DarkModeContext";
import Navbar from "../components/Navbar";


export default function Profile() {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext)

  return(
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <p>This is the profile page</p>
    </>
  )
};

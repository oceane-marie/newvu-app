import { useContext } from "react";
import {DarkModeContext} from "../context/DarkModeContext";
import Navbar from "../components/Navbar";
import userData from "../users";
import { useParams } from 'react-router-dom';

export default function Profile() {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext)
  const { userId } = useParams();
  const user = userData.find(user => user.id === parseInt(userId))

  return(
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <p>This is the profile page</p>
      <p>{user.firstName}</p>
    </>
  )
};

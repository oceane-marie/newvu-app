import { useContext } from "react";
import {DarkModeContext} from "../context/DarkModeContext";
import Navbar from "../components/Navbar";
import userData from "../data/users";
import { useParams } from 'react-router-dom';
import UserInfo from "../components/UserInfo";
import Buttons from "../components/Buttons";

export default function Profile() {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext)
  const { userId } = useParams();
  const user = userData.find(user => user.id === parseInt(userId))

  return(
    <div>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <div className="margin-ctr">
        <Buttons darkMode={darkMode}/>
        <UserInfo darkMode={darkMode} user={user}/>
      </div>
    </div>
  )
};

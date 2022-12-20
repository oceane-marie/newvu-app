import Navbar from "../components/Navbar";
import RegisterForm from '../components/RegisterForm';
import {useContext} from "react";
import {DarkModeContext} from '../DarkModeContext';

export default function Register() {
  // useRef on user's input focus and error
  // useRef Hook allows you to persist values between renders or to access the DOM directly
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext)

  return(
    <div className={darkMode ? "dark" : ""}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <RegisterForm darkMode={darkMode}/>
    </div>
  )
};

import { useContext } from "react";
import {DarkModeContext} from "../context/DarkModeContext";
import Navbar from "../components/Navbar";
import userData from "../data/users";
import { useParams } from 'react-router-dom';
import UserInfo from "../components/UserInfo";
import Buttons from "../components/Buttons";
import dataBookings from "../data/bookings";
import Booking from "../components/Booking";


export default function Profile() {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext)
  const { userId } = useParams();
  const user = userData.find(user => user.id === parseInt(userId))

  const booking = dataBookings.map(booking => {
    return < Booking
    key={booking.id}
    {...booking}
    />
  } )

  return(
    <div>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <div className="margin-ctr">
        <Buttons darkMode={darkMode}/>
        <UserInfo darkMode={darkMode} user={user}/>
        <h3 className="mt-24">Past experiences</h3>
        <div className={`card-wrapper ${darkMode ? "dark" : ""}`}>
          {booking}
        </div>
      </div>
    </div>
  )
};

import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={props.darkMode ? "dark" : ""}>
        <Link to="/" className={`logo ${props.darkMode ? "dark-color" : ""}`}>
          <i class="fa-regular fa-eye"></i>
          <h1 id={"logo"} >Newvu</h1>
        </Link>
      <div className="border-blur"></div>
      <div className="toggler">
        <p className="toggler-light">
          Light
        </p>
        <div className="toggler-slider" onClick={props.toggleDarkMode}>
          <div className="toggler-slider-circle"></div>
        </div>
        <p className="toggler-dark">
          Dark
        </p>
        <Link to="/register">
          <i class="fa-solid fa-arrow-right-to-bracket"></i>
        </Link>
        <Link to="/profile/:userId">
          <i class="fa-regular fa-user"></i>
        </Link>
      </div>
    </nav>
  )
}

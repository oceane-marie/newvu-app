
export default function Hero(props) {
  return (
    <div className={`hero ${props.darkMode ? "dark" : ""}`}>
      <div className="img-heroes">
        <img src="https://images.pexels.com/photos/3866555/pexels-photo-3866555.png" alt="" className="img1"/>
        <img src="https://images.pexels.com/photos/354951/pexels-photo-354951.jpeg" alt="" className="img2"/>
        <img src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg" alt="" className="img3"/>
        <img src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg" alt="" className="img4"/>
        <img src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg" alt="" className="img5"/>
      </div>
      <div className="text-heroes">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by<br/>
          one-of-a-kind hosts—all without leaving home.
        </p>
      </div>
    </div>
  )
}

import React from "react"
import { Link } from "react-router-dom"


export default function Card(props) {

  let textVignette
    if (props.openSpots === 0) {
      textVignette = "Sold Out"
    }
    else if (props.city === "online") {
      textVignette = "online"
    }

    const [img, setImg] = React.useState(props.img)

    function onMouseEnter() {
      setImg(props.newImg)
    }

    function onMouseLeave() {
      setImg(props.img)
    }

  return(

      <div className="card-content">
        { textVignette && <div className="sold-vignette"><p>{textVignette}</p></div>}
        <Link to={`/experiences/${props.id}`} state={{id : props.id}}>
          < img src={img} alt="" className="card-img" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>
        </Link>
        <div className="card-text">
          <div className="card-text-flex">
            <i class="fa-solid fa-star"></i>
            <p>{props.stars}<span> ({props.review}) . {props.city}</span></p>
          </div>
          <p>Join {props.name} for an amazing experience</p>
          <p><strong>{props.price}$</strong>/hour</p>
          <div className="ctr-flex">
          </div>
        </div>
      </div>
  )
}

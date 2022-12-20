import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import data from "../experiencesData";
import {Link} from 'react-router-dom';

export default function Experience(props) {
  const { state : { id }} = useLocation();
  const experience = data.find(experience => experience.id === id)
  const [spot, setSpot] = useState(experience.openSpots)

  console.log(experience)

  const [current, setCurrent] = React.useState(0);
  const length = experience.gallery.length

  const nextSlide = () => {
    setCurrent( current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent( current === 0 ? length - 1 : current - 1)
  }
  const imagesCarousel = experience.gallery.map((image, index) => {
    return (
      <div className="image-carousel">
        {index === current && (< img
          key={index}
          id={`img${experience.gallery.indexOf(image) + 1}`}
          src={image.url}
          alt=""
          />)}
      </div>
    )
  })

  return(
    <div className='ctr-flex margin-ctr' >
        <div className='experience-content'>
          <div className='ctr-flex'>
            <div className=' ctr-flex width-small'>
              <h4><i className="fa-solid fa-tree-city padding-right"></i>{experience.city}</h4>
              <h4><i className="fa-regular fa-star padding-right"></i>{experience.stars}</h4>
              <h4><i className="fa-regular fa-thumbs-up padding-right"></i>{experience.review}</h4>
            </div>
            <h4 id="popular">{spot <= 25 ? "popular" : ""}</h4>
          </div>

          <div className={`content-section ${props.darkMode ? "dark-shadow" : "clear-shadow"}`}>
            <div>
              <h4>Your host</h4>
                <h2>{experience.name}</h2>
              <h4>Description</h4>
              <p>{experience.description}</p>
            </div>
          </div>

          <div className='ctr-flex'>
            <div className="ctr-flex ctr-activity">
              <div>
                <h4>Activity</h4>
                <h3>{experience.activity}</h3>
              </div>
              <h3>{experience.price} $</h3>
            </div>

            <div className='spot-section'>
              <p id="spot">Only {spot < 2 ? "spot" : "spots"} <strong>{spot}</strong> remaining</p>
              <Link to={`/experiences/${experience.id}/book`}><button className={`btn-book ${props.darkMode ? "clear" : "dark"}`} onClick={() => setSpot(spot - 1)}><h3>Book now</h3></button></Link>
            </div>
          </div>
        </div>

        <div className='experience-img'>
          <i class="fa-solid fa-arrow-left" onClick={prevSlide}></i>
          <i class="fa-solid fa-arrow-right" onClick={nextSlide}></i>

          {imagesCarousel}

          <div className='images'>
          <img src={experience.gallery[1].url} alt="" className="small-img padding-right" key={experience.gallery[1].key}></img>
          <img src={experience.gallery[2].url} alt="" className="small-img padding-right" key={experience.gallery[1].key}></img>
          <img src={experience.gallery[3].url} alt="" className="small-img" key={experience.gallery[1].key}></img>
          </div>
        </div>
      </div>
  )
};

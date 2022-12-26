export default function Booking(props) {
    return (
      <div className="card-content">
      < img src={props.img} alt="" className="card-img"/>
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
};

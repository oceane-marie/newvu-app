
// import {Link} from "react-router-dom"

export default function UserInfo(props) {

  return (
    <div className="ctr-centered dir-column">
      <img src={props.user.avatar} alt={props.user.user} className="avatar"/>
      <div className="user-info tx-center mt-24">
        <p>{props.user.firstName} {props.user.lastName}</p>
        <p>{props.user.user}</p>
        <p>{props.user.eMail}</p>
      </div>
    </div>
  )
};

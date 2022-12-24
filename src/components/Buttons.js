import { Link } from "react-router-dom";

export default function Buttons(props) {
  return (
    <div>
      <Link to= "#" className="link"><h3>Become a host</h3></Link>
      <Link to= "/" className="mt-24 link"><h3>Search an experience</h3></Link>
    </div>

  )
};

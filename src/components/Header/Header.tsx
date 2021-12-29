import { Link } from "react-router-dom";
import { Navbar } from "reactstrap";
import "./Header.css";

export default function Header() {
  return (
    <Navbar className="header">
      <Link to={"/"} className="no-style">
        Home
      </Link>
    </Navbar>
  );
}

// import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "../App/App.css";
import "./Profile.css";

function Profile(props) {
  return (
    <nav className={`profile ${props.loggedIn ? "" : "profile__hide"}`}>
      <Header />
      <h2 className="profile__header">ПРОФИЛЬ</h2>
    </nav>
  );
}

export default Profile;

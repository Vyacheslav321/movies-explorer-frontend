// import { Link } from "react-router-dom";
import "../App/App.css";
import "./Profile.css";

function Profile(props) {
  return (
    <nav className={`profile ${props.loggedIn ? "" : "profile__hide"}`}>
      <h3 className="profile__header">Аккаунт</h3>
      <div className="profile__icon"></div>
    </nav>
  );
}

export default Profile;

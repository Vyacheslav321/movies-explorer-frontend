import React from "react";
import {
  useState,
  // useEffect,
} from "react";
import {
  Route,
  Switch,
  // Redirect,
  useHistory,
} from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [inProgress, setInProgress] = useState(false);
  // const [isNavigationPopupOpen, setIsNavigationPopupOpen]

  const history = useHistory();

  function handleRegister() {
    setInProgress(true);
    setLoggedIn(true);
    history.push("/movies");
    setInProgress(false);
  }

  function handleLogin() {
    setInProgress(true);
    setLoggedIn(true);
    console.log("LoggedIn = " + loggedIn);
    history.push("/movies");
    setInProgress(false);
  }

  // function handleSignOut() {
  //   setLoggedIn(false);
  //   history.push("/");
  // }

  // useEffect(() => {
  //   const token = localStorage.getItem("jwt");
  //   if (token) {
  //     getToken(token)
  //       .then((res) => {
  //         setEmail(res.data.email);
  //         setLoggedIn(true);
  //         history.push("/");
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //   }
  // }, [history]);

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main loggedIn={loggedIn} />
        </Route>
        <Route exact path="/signup">
          <Register onRegister={handleRegister} inProgress={inProgress} />
        </Route>
        <Route exact path="/signin">
          <Login onLogin={handleLogin} inProgress={inProgress} />
        </Route>
        <Route exact path="/profile">
          <Profile loggedIn={loggedIn} inProgress={inProgress} />
        </Route>
        <Route exact path="/movies">
          <Movies loggedIn={loggedIn} />
        </Route>
        <Route exact path="/saved-movies">
          <SavedMovies loggedIn={loggedIn} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

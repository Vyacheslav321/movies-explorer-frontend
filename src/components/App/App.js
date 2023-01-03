import React, { useEffect, useState } from "react";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  // useLocation,
} from "react-router-dom";
import { CurrentUserContext } from "../../context/currentUserContext";
import {
  register,
  authorize,
  getUserInfo,
  setUserInfo,
  getMovies,
  createUserMovie,
  deleteUserMovie,
} from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [inProgress, setInProgress] = useState(false);
  // const [message, setMessage] = useState("");
  const [currentUser, setCurrentUser] = useState({
    userId: "",
    name: "",
    email: "",
  });
  const [isUpdateProfile, setIsUpdateProfile] = useState(true);

  const [movies, setMovies] = useState([]);

  const [registerErrorMessage, setRegisterErrorMessage] = useState("");
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const [editProfileErrorMessage, setEditProfileErrorMessage] = useState("");

  const history = useHistory();
  // const location = useLocation();

  // обработчик логина
  function handleLogin(email, password) {
    setInProgress(true);
    return authorize(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          setLoginErrorMessage("");
          setLoggedIn(true);
          // после написания фильмов, сделать перенаправление на /films
          // history.push("/movies");
          history.push("/");
        } else {
          setLoginErrorMessage(res.message);
        }
      })
      .catch((err) => {
        if (err.error === "Bad Request") {
          setLoginErrorMessage(err.validation.body.message);
        } else {
          setLoginErrorMessage(err.message);
        }
      })
      .finally(() => {
        setInProgress(false);
      });
  }

  //обработчик регистрации
  function handleRegister(name, email, password) {
    setInProgress(true);
    return register(name, email, password)
      .then((res) => {
        if (res.id) {
          setRegisterErrorMessage("");
          handleLogin(email, password);
        } else if (res.message) {
          setRegisterErrorMessage(res.message);
        }
      })
      .catch((err) => {
        if (err.error === "Bad Request") {
          setRegisterErrorMessage(err.validation.body.message);
        } else {
          setRegisterErrorMessage(err.message);
        }
      })
      .finally(() => {
        setInProgress(false);
      });
  }

  // выход
  function handleSignOut() {
    setLoggedIn(false);
    localStorage.removeItem("jwt");
    localStorage.removeItem("movies");
    setMovies([]);
    history.push("/");
  }

  function handleEditProfile(name, email) {
    const token = localStorage.getItem("jwt");
    setInProgress(true);
    if (token) {
      setUserInfo(email, name, token)
        .then((userInfo) => {
          if (userInfo.name) {
            setCurrentUser(userInfo);
            setIsUpdateProfile(true);
            // setEditProfileErrorMessage("Профиль обновлен успешно!");
          } else if (userInfo.message) {
            setEditProfileErrorMessage(userInfo.message);
            setIsUpdateProfile(false);
            // setInProgress(false);
          }
          return
        })
        .catch((err) => {
          setIsUpdateProfile(false);
          if (err.error === "Bad Request") {
            setEditProfileErrorMessage(err.validation.body.message);
          } else {
            setEditProfileErrorMessage(err.message);
          }
        })
        .finally(() => setInProgress(false));
    }
  }

  function clearErrorMessages() {
    setRegisterErrorMessage('');
    setLoginErrorMessage('');
    setEditProfileErrorMessage('');
}

  // проверка токена
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      getUserInfo(token)
        .then((res) => {
          setCurrentUser(res);
          setLoggedIn(true);
          // после написания фильмов, сделать перенаправление на /films
          // history.push("/movies");
          history.push("/");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [history]);

  // загрузка данных пользователя
  useEffect(() => {
    if (loggedIn) {
      setInProgress(true);
      const token = localStorage.getItem("jwt");
      Promise.all([getUserInfo(token), getMovies(token)])
        .then(([userInfo, moviesData]) => {
          // moviesData.reverse();
          setCurrentUser(userInfo);
          localStorage.setItem("userMovies", JSON.stringify(moviesData));
        })
        .catch((err) => {
          console.log(`Ошибка загрузки данных ${err}`);
        })
        .finally(() => {
          setInProgress(false);
        });
    }
  }, [loggedIn, history]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Main loggedIn={loggedIn} />
          </Route>
          <Route exact path="/">
            {loggedIn ? <Redirect to="/" /> : <Redirect to="/signin" />}
          </Route>
          <ProtectedRoute
            exact
            path="/profile"
            component={Profile}
            loggedIn={loggedIn}
            onEdit={handleEditProfile}
            isUpdateProfile={isUpdateProfile}
            handleSignOut={handleSignOut}
            errorMessage={editProfileErrorMessage}
            clearErrorMessages={clearErrorMessages}
            inProgress={inProgress}
          />
          <ProtectedRoute
            exact
            path="/movies"
            component={Movies}
            loggedIn={loggedIn}
            inProgress={inProgress}
          />
          <ProtectedRoute
            exact
            path="/saved-movies"
            component={SavedMovies}
            loggedIn={loggedIn}
            inProgress={inProgress}
          />
          <Route exact path="/signup">
            {loggedIn ? (
              <Redirect to="/" />
            ) : (
              <Register
                onRegister={handleRegister}
                inProgress={inProgress}
                errorMessage={registerErrorMessage}
                clearErrorMessages={clearErrorMessages}
              />
            )}
          </Route>
          <Route exact path="/signin">
            {loggedIn ? (
              <Redirect to="/" />
            ) : (
              <Login
                onLogin={handleLogin}
                inProgress={inProgress}
                errorMessage={loginErrorMessage}
                clearErrorMessages={clearErrorMessages}
              />
            )}
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

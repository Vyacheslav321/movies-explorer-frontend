import { useEffect, useState } from "react";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import { CurrentUserContext } from "../../context/currentUserContext";
import {
  register,
  authorize,
  getUserInfo,
  setUserInfo,
  getMovies,
  saveUserMovie,
  deleteUserMovie,
} from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Preloader from "../Preloader/Preloader";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";
import Tooltip from "../Tooltip/Tooltip";
import "./App.css";
import { getUserMovieCard } from "../../utils/Utils";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [inProgress, setInProgress] = useState(false);
  const [tooltip, setTooltip] = useState({
    isPopupOpen: false,
    message: "",
    successful: true,
  });

  const [currentUser, setCurrentUser] = useState({
    userId: "",
    name: "",
    email: "",
  });
  const [isUpdateProfile, setIsUpdateProfile] = useState(true);
  const [editProfileErrorMessage, setEditProfileErrorMessage] = useState("");
  const [isUpdated, setIsupdated] = useState(false);

  const history = useHistory();
  const location = useLocation();

  function handleLogin(email, password) {
    setInProgress(true);
    return authorize(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          setLoggedIn(true);
          history.replace({ pathname: "/movies" });
        } else {
          setTooltip({
            isPopupOpen: true,
            message: res.message,
            successful: false,
          });
        }
      })
      .catch((err) => {
        if (err.error === "Bad Request") {
          setTooltip({
            isPopupOpen: true,
            message: err.validation.body.message,
            successful: false,
          });
        } else {
          setTooltip({
            isPopupOpen: true,
            message: err.message,
            successful: false,
          });
        }
      })
      .finally(() => {
        setInProgress(false);
      });
  }

  function handleRegister(name, email, password) {
    setInProgress(true);
    return register(name, email, password)
      .then((res) => {
        if (res.id) {
          handleLogin(email, password);
        } else if (res.message) {
          setTooltip({
            isPopupOpen: true,
            message: res.message,
            successful: false,
          });
        }
      })
      .catch((err) => {
        if (err.error === "Bad Request") {
          setTooltip({
            isPopupOpen: true,
            message: err.validation.body.message,
            successful: false,
          });
        } else {
          setTooltip({
            isPopupOpen: true,
            message: err.message,
            successful: false,
          });
        }
      })
      .finally(() => {
        setInProgress(false);
      });
  }

  // выход
  function handleSignOut() {
    setLoggedIn(false);
    setCurrentUser({});
    localStorage.clear();
    history.push("/");
  }

  function handleEditProfile(name, email) {
    const token = localStorage.getItem("jwt");
    if (token) {
      setInProgress(true);
      setUserInfo(email, name, token)
        .then((userInfo) => {
          if (userInfo.name) {
            setCurrentUser(userInfo);
            setTooltip({
              isPopupOpen: true,
              message: "Данные пользователя успешно изменены",
              successful: true,
            });
            setIsUpdateProfile(true);
          } else if (userInfo.message) {
            setEditProfileErrorMessage(userInfo.message);
            setIsUpdateProfile(false);
          }
          return;
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
    setEditProfileErrorMessage("");
  }

  function handleTooltip({ isOpen, message, isSuccessful }) {
    setTooltip({
      isPopupOpen: isOpen,
      message: message,
      successful: isSuccessful,
    });
  }

  function handlePreloader(turnOn) {
    setInProgress(turnOn);
  }

  function handleSaveMovie(movie) {
    const token = localStorage.getItem("jwt");
    const userMovies = JSON.parse(localStorage.getItem("userMovies"));
    const save = getUserMovieCard(userMovies, movie);
    if (save === undefined) {
      saveUserMovie(movie, token)
        .then((data) => {
          if (data._id) {
            localStorage.setItem(
              "userMovies",
              JSON.stringify([...userMovies, data])
            );
            setIsupdated(!isUpdated);
          }
        })
        .catch((err) => {
          handleTooltip({
            isPopupOpen: true,
            message: err.message,
            successful: false,
          });
        })
        .finally(() => handlePreloader(false));
    }
  }

  // обработчик удаления фильма пользователя
  function handleDeleteUserMovie(movieCard) {
    const token = localStorage.getItem("jwt");
    const userMovies = JSON.parse(localStorage.getItem("userMovies"));
    const foundUserMovies = JSON.parse(localStorage.getItem("foundUserMovies"));
    const deleteMovie = userMovies.find((item) => item._id === movieCard._id);
    deleteUserMovie(movieCard._id, token)
      .then(() => {
        const newUserMovies = userMovies.filter((movie) => {
          return movie.movieId !== deleteMovie.movieId;
        });
        localStorage.setItem("userMovies", JSON.stringify(newUserMovies));
        const newFoundUserMovies = foundUserMovies.filter((movie) => {
          return movie.movieId !== deleteMovie.movieId;
        });
        if (newFoundUserMovies.length === 0) {
          handleTooltip({
            isPopupOpen: true,
            message: "Добавьте фильмы в избранное",
            successful: true,
          });
        }
        localStorage.setItem(
          "foundUserMovies",
          JSON.stringify(newFoundUserMovies)
        );
        setIsupdated(!isUpdated);
      })
      .catch((err) => {
        handleTooltip({
          isPopupOpen: true,
          message: err.message,
          successful: false,
        });
      });
  }

  // проверка токена
  useEffect(() => {
    const path = location.pathname;
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      getUserInfo(jwt)
        .then((data) => {
          setCurrentUser(data);
          setLoggedIn(true);
          history.push(path);
        })
        .catch((err) => {
          if (err.code === 401) {
            setLoggedIn(false);
          }
        });
    }
  }, []);

  // загрузка данных пользователя после логина
  useEffect(() => {
    if (loggedIn) {
      const token = localStorage.getItem("jwt");
      if (token) {
        setInProgress(true);
        Promise.all([getMovies(token), getUserInfo(token)])
          .then(([moviesData, userData]) => {
            setCurrentUser(userData);
            localStorage.setItem("userMovies", JSON.stringify(moviesData));
            localStorage.setItem("searchKeyword", "");
            localStorage.setItem("searchUserKeyword", "");
            localStorage.setItem("foundMovies", JSON.stringify([]));
            localStorage.setItem("foundUserMovies", JSON.stringify([]));
          })
          .catch((err) => {
            setTooltip({
              isPopupOpen: true,
              message: err.message,
              successful: false,
            });
          })
          .finally(() => {
            setInProgress(false);
          });
      }
    }
  }, [loggedIn]);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Preloader inProgress={inProgress} />
        <Switch>
          <Route exact path="/">
            <Main loggedIn={loggedIn} />
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
            isUpdated={isUpdated}
            handleTooltip={handleTooltip}
            handlePreloader={handlePreloader}
            handleSaveMovie={handleSaveMovie}
            handleDeleteUserMovie={handleDeleteUserMovie}
          />
          <ProtectedRoute
            exact
            path="/saved-movies"
            component={SavedMovies}
            loggedIn={loggedIn}
            isUpdated={isUpdated}
            handleTooltip={handleTooltip}
            handlePreloader={handlePreloader}
            handleDeleteUserMovie={handleDeleteUserMovie}
          />
          <Route exact path="/signup">
            {loggedIn ? (
              <Redirect to="/movies" />
            ) : (
              <Register onRegister={handleRegister} inProgress={inProgress} />
            )}
          </Route>
          <Route exact path="/signin">
            {loggedIn ? (
              <Redirect to="/movies" />
            ) : (
              <Login onLogin={handleLogin} inProgress={inProgress} />
            )}
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Tooltip tooltip={tooltip} handleTooltip={handleTooltip} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;

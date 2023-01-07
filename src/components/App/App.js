import React, { useEffect, useState } from "react";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
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
import { filterMovies } from "../../utils/Utils";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [inProgress, setInProgress] = useState(false);
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState({
    userId: "",
    name: "",
    email: "",
  });
  const [isUpdateProfile, setIsUpdateProfile] = useState(true);

  const [foundMovies, setFoundMovies] = useState([]);
  const [foundUserMovies, setFoundUserMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [isShortMoviesChecked, setIsShortMoviesChecked] = useState(false);
  const [isShortUserMoviesChecked, setIsShortUserMoviesChecked] =
    useState(false);
  const [isNotFoundResult, setIsNotFoundResult] = useState(true);

  const [registerErrorMessage, setRegisterErrorMessage] = useState("");
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const [editProfileErrorMessage, setEditProfileErrorMessage] = useState("");
  const [isSearchError, setIsSearchError] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("shortMoviesChecked") === "true") {
      setIsShortMoviesChecked(true);
    } else {
      setIsShortMoviesChecked(false);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("shortUserMoviesChecked") === "true") {
      setIsShortUserMoviesChecked(true);
    } else {
      setIsShortUserMoviesChecked(false);
    }
  }, []);

  function handleLogin(email, password) {
    setInProgress(true);
    return authorize(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          setLoginErrorMessage("");
          setLoggedIn(true);
          setToken(res.token);
          history.replace({ pathname: "/movies" });
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
    setToken("");
    setLoggedIn(false);
    localStorage.removeItem("jwt");
    localStorage.removeItem("foundMovies");
    localStorage.removeItem("foundUserMovies");
    localStorage.removeItem("userMovies");
    setFoundMovies([]);
    setAllMovies([]);
    history.push("/");
  }

  function handleEditProfile(name, email) {
    setInProgress(true);
    if (token) {
      setUserInfo(email, name, token)
        .then((userInfo) => {
          if (userInfo.name) {
            setCurrentUser(userInfo);
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
    setRegisterErrorMessage("");
    setLoginErrorMessage("");
    setEditProfileErrorMessage("");
  }

  function handleShortMoviesChecked(e) {
    setIsShortMoviesChecked(e.target.checked);
  }

  function handleShortUserMoviesChecked(e) {
    setIsShortUserMoviesChecked(e.target.checked);
  }

  useEffect(() => {
    localStorage.setItem("shortMoviesChecked", isShortMoviesChecked);
  }, [isShortMoviesChecked]);

  useEffect(() => {
    localStorage.setItem("shortUserMoviesChecked", isShortUserMoviesChecked);
  }, [isShortUserMoviesChecked]);

  function handleSearchMovies(searchKeyword) {
    setInProgress(true);
    setIsNotFoundResult(false);
    setIsSearchError(false);
    if (allMovies.length === 0) {
      moviesApi.getMovies()
        .then((movies) => {
          setAllMovies(movies);
          const searchResult = filterMovies(
            movies,
            searchKeyword,
            isShortMoviesChecked
          );
          if (searchResult.length === 0) {
            setIsNotFoundResult(true);
            setIsSearchError(true);
          } else {
            localStorage.setItem("foundMovies", JSON.stringify(searchResult));
            setFoundMovies(searchResult);
          }
        })
        .catch((err) => {
          console.log(err.message);
          setIsSearchError(true);
        })
        .finally(() => {
          setInProgress(false);
        });
    } else {
      const searchResult = filterMovies(
        allMovies,
        searchKeyword,
        isShortMoviesChecked
      );
      if (searchResult.length === 0) {
        setIsNotFoundResult(true);
      } else {
        localStorage.setItem("foundMovies", JSON.stringify(searchResult));
        setFoundMovies(searchResult);
      }
      setInProgress(false);
    }
  }

  function handleSearchUserMovies(searchKeyword) {
    setInProgress(true);
    setIsNotFoundResult(false);
    setIsSearchError(false);
    const userMovies = JSON.parse(localStorage.getItem("userMovies"));
    const searchResult = filterMovies(
      userMovies,
      searchKeyword,
      isShortUserMoviesChecked
    );
    if (searchResult.length === 0) {
      setIsNotFoundResult(true);
    } else {
      localStorage.setItem("foundUserMovies", JSON.stringify(searchResult));
      setFoundUserMovies(searchResult);
    }
    setInProgress(false);
  }

  function handleSaveMovie(movie) {
    const userMovies = JSON.parse(localStorage.getItem("userMovies"));
    saveUserMovie(movie, token)
      .then((data) => {
        localStorage.setItem("userMovies", JSON.stringify([...userMovies, data]));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  // обработчик удаления фильма пользователя
  function handleDeleteUserMovie(movieId) {
    const userMovies = JSON.parse(localStorage.getItem("userMovies"));
    const foundUserMovies = JSON.parse(localStorage.getItem("foundUserMovies"));
    deleteUserMovie(movieId, token)
      .then(() => {
        const newUserMovies = userMovies.filter((movie) => {
          return movie._id !== movieId;
        });
        localStorage.setItem("userMovies", JSON.stringify(newUserMovies));
        const newFoundUserMovies = foundUserMovies.filter((movie) => {
          return movie._id !== movieId;
        });
        localStorage.setItem("foundUserMovies", JSON.stringify(newFoundUserMovies));
        setFoundUserMovies(newFoundUserMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // проверка токена
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      getUserInfo(jwt)
        .then((data) => {
          setCurrentUser(data);
          setLoggedIn(true);
          setToken(localStorage.getItem("jwt"));
          history.push("/movies");
        })
        .catch((err) => {
          console.log(err.message);
          if (err.code === 401) {
            history.push("/");
          }
        });
    }
  }, [history]);

  // загрузка данных пользователя
  useEffect(() => {
    if (loggedIn) {
      setInProgress(true);
      const token = localStorage.getItem("jwt");
      getMovies(token)
        .then((moviesData) => {
          localStorage.setItem("userMovies", JSON.stringify(moviesData));
        })
        .catch((err) => {
          console.log(`Ошибка загрузки данных ${err.message}`);
        })
        .finally(() => {
          setInProgress(false);
        });
    }
  }, [loggedIn]);



  // useEffect(() => {
  //   const token = localStorage.getItem("jwt");
  //   getMovies(token)
  //     .then((moviesData) => {
  //       localStorage.setItem("userMovies", JSON.stringify(moviesData));
  //       // setUserMovies(moviesData);
  //     })
  //     .catch((err) => {
  //       console.log(`Ошибка загрузки данных: ${err.message}`);
  //     });
  // }, [location]);

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
            movies={foundMovies} // результаты поиска
            onSearchMovies={handleSearchMovies} // обработчик поиска
            isNotFoundResult={isNotFoundResult} // ничего не нашлось
            isSearchError={isSearchError}
            handleSaveMovie={handleSaveMovie}
            handleDeleteUserMovie={handleDeleteUserMovie}
            inProgress={inProgress}
            handleShortMoviesChecked={handleShortMoviesChecked}
            isShortMoviesChecked={isShortMoviesChecked}
          />
          <ProtectedRoute
            exact
            path="/saved-movies"
            component={SavedMovies}
            loggedIn={loggedIn}
            movies={foundUserMovies} // результаты поиска
            onSearchUserMovies={handleSearchUserMovies} // обработчик поиска
            isNotFoundResult={isNotFoundResult} // ничего не нашлось
            handleDeleteUserMovie={handleDeleteUserMovie}
            inProgress={inProgress} // сделать?
            handleShortUserMoviesChecked={handleShortUserMoviesChecked}
            isShortUserMoviesChecked={isShortUserMoviesChecked}
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

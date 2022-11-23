import { useState, useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import Movies from "../Movies/Movies";
import Preloader from "../Preloader/Preloader";

// const onRegister = ({ email, password }) => {
//   return register(email, password)
//     .then((data) => {
//       setIsReg(true);
//       setInfoPopupOpen(true);
//       setEmail(data.email);
//       history.push("/sign-in");
//     })
//     .catch((err) => {
//       err.message === undefined
//         ? setMessage(err.error)
//         : setMessage(err.message);
//       setIsReg(false);
//       setInfoPopupOpen(true);
//     });
// };
//
// const onLogin = ({ email, password }) => {
//   return authorize(email, password)
//     .then((res) => {
//       if (res) {
//         // setCookie("jwt", res.token, { path: '/' })
//         localStorage.setItem('jwt', res.token);
//         setEmail(res.email);
//         setLoggedIn(true);
//         history.replace({ pathname: "/" });
//       }
//     })
//     .catch((err) => {
//       err.message === undefined
//         ? setMessage(err.error)
//         : setMessage(err.message);
//       setIsReg(false);
//       setInfoPopupOpen(true);
//     });
// };
//
// // проверка валидности токена и получения email
// useEffect(() => {
//   // const token = cookies["jwt"];
//   const token = localStorage.getItem('jwt');
//   if (token) {
//     getToken(token)
//       .then((res) => {
//         setLoggedIn(true);
//         setEmail(res.email);
//         history.push("/");
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   }
// }, [history]);

function App() {
  return (
    <div className="page">
      <Route path="/test">
        <Header />
        <Main />
        <Footer />
      </Route>
      <Route exact path="/">
        <Header />
      </Route>
      <Route path="/signup">
        <Register />
      </Route>
      <Route path="/signin">
        <Login />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/movies">
        <Movies />
      </Route>
      <Route path="/saved-movies">
        <SavedMovies />
      </Route>
      <Route exact path="/">
        <Footer />
      </Route>
    </div>
  );
}

export default App;

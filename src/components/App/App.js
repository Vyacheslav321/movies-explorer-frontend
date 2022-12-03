import { useState, useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";

function App() {
const isLoggedIn = localStorage.getItem('loggedIn');
const history = useHistory();

function handleLogin () {
  localStorage.setItem('loggedIn', 'true');
}

function handleSignOut() {
  localStorage.removeItem('loggedIn');
  history.push('/');
}
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

  return (
    <div className="page">
      <Route exact path="/">
        <Header />
        <Main />
      </Route>
      <Route exact path="/signup">
        {isLoggedIn ? <Redirect to="/" /> : <Register />}
      </Route>
      <Route exact path="/signin">
        {isLoggedIn ? <Redirect to="/" /> : <Login />}
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/movies" loggedIn={isLoggedIn}>
        <Header />
        <Movies />
        <Footer />
      </Route>
      <Route exact path="/saved-movies">
        <Header />
        <SavedMovies />
        <Footer />
      </Route>
      <Route exact path="/">
        <Footer />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </div>
  );
}

export default App;

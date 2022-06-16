import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Fragment, useEffect } from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import Home from "./pages/home";
import SignIn from "./pages/signIn";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { authentication } from "./components/firebase/config";
import { setUser } from "./redux-toolkit/global/globalSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(authentication, (user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        setUser(undefined);
      }
    });
  }, [dispatch]);
  return (
    <Fragment>
      <GlobalStyles></GlobalStyles>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Fragment>
  );
}

export default App;

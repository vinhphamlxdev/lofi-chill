import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import Home from "./pages/home";
import SignIn from "./pages/signIn";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { authentication } from "./components/firebase/config";
import { setUser } from "./redux-toolkit/global/globalSlice";
import Loading from "./components/loading";
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const handleLoadScreen = () => {
    setLoading(false);
  };

  useEffect(() => {
    onAuthStateChanged(authentication, (userLogin) => {
      if (userLogin) {
        dispatch(setUser(userLogin));
      } else {
        setUser(undefined);
      }
    });
    window.addEventListener("load", handleLoadScreen);
    return () => window.removeEventListener("load", handleLoadScreen);
  }, [dispatch]);
  return (
    <Fragment>
      <GlobalStyles></GlobalStyles>
      {loading && <Loading />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Fragment>
  );
}

export default App;

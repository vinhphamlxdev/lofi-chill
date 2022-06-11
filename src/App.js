import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import Home from "./components/backgRound";
function App() {
  return (
    <Fragment>
      <GlobalStyles></GlobalStyles>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Fragment>
  );
}

export default App;

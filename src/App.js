import "./App.css";
import BackgRound from "~/components/backgRound";
import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
function App() {
  return (
    <Fragment>
      <GlobalStyles></GlobalStyles>
      <div className="w-full h-screen App">
        <BackgRound></BackgRound>
      </div>
    </Fragment>
  );
}

export default App;

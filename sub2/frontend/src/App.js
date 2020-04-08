import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";

// Pages
import MainPage from "./pages/Mainpage";
import Result from "./pages/Result";
import My from "./pages/Mypage";

const App = () => {
  return(
    <div>
    <GlobalStyle></GlobalStyle>
      <Switch>
        <Route path="/result" component={Result} />
        <Route path="/my" component={My} />
        <Route path="/" component={MainPage} />
      </Switch>
    </div>
  )
}

const GlobalStyle = createGlobalStyle`
  body{
    width: 100%;
    height: 100%;
  }
`;


export default App;

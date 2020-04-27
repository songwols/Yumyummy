import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";

// Pages
import MainPage from "./pages/Mainpage";
import Result from "./pages/Resultpage";
import Detail from "./pages/Detailpage";
import My from "./pages/Mypage";
import Mymap from "./components/Mymap"

const App = () => {
  return(
    <div>
    <GlobalStyle></GlobalStyle>
      <Switch>
        <Route path="/loc" component={Mymap}/>
        <Route path="/result/:store_name/:address/:menu" component={Result} />
        <Route path="/detail/:id" component={Detail} />
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

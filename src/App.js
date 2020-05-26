import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import GlobalStyle from "./styles/Global";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
// import ReportModal from "./components/ReportModal";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";



// function App() {
//   return (
//     <div className="App">
//       <ReportModal />
//     </div>
//   );
// }

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route component={PageNotFound}/>
    </Switch>
    <Footer />
    <GlobalStyle />
  </BrowserRouter>
)

export default App;
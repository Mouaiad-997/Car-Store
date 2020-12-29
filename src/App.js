import logo from './logo.svg';
import './App.css';
import Login from './component/pages/login';
import Singin from './component/pages/singin';
import Header from './component/pages/header';
import Footer from './component/pages/footer';
import Home from './component/pages/home';
import Addcar from './component/pages/addcar';
import Sellcar from './component/pages/sellcar';
import Sell from './component/pages/sell';
import Update from './component/pages/update';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Addparameter from './component/pages/addparameter';
function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
    {/* <Singin></Singin> */}
    <Router>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/singin" component={Singin}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/addcar" component={Addcar}></Route>
        <Route exact path="/update/:id" component={Update}></Route>
        <Route exact path="/sellcar" component={Sellcar}></Route>
        <Route exact path="/sell/:id" component={Sell}></Route>
        <Route exact path="/addparameter" component={Addparameter}></Route>
      
      </Router>

    </div>
  );
}

export default App;

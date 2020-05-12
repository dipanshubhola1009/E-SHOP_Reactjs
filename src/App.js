import React from 'react';
import './App.css';
import Home from './container/home';
import DisplayBox from './container/DisplayBox';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Footer from './container/Footer';
import Banner from './components/Banner';
import Heading from './components/Heading';
import SelectedProduct from './container/SelectedProduct';
import Login from './container/Login';
import Signup from './container/Signup';
import UserPage from './container/UserPage';

function App() {
  return (
    <Router>
    <div className="App">

     <Home />
     <Route path='/' exact component={Banner}></Route>
     <Route path='/' exact component={Heading} ></Route>
     <Route path='/' exact component={DisplayBox}></Route>
     <Route path='/:id' exact component={SelectedProduct}></Route>
     <Route path='/path/login' exact component={Login}></Route>
     <Route path='/path/signup' exact component={Signup} ></Route>
     <Route path='/ui/:Email' exact component={UserPage}></Route>
     <Footer />
    </div>
    </Router>
  );
}

export default App;

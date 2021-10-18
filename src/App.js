import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Header from './components/Header/Header';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';



function App() {
  return (
    <div>    
       <Router>
       <Header></Header>
         <Switch>
          <Route exact path="/">
           <Home></Home>
          </Route>
          <Route exact path="/home">
           <Home></Home>
          </Route>
          <Route exact path="/services">
          <Services></Services>
          </Route>
          <Route exact path="/services">
          <Services></Services>
          </Route>

          <Route exact path="/about">
          <About></About>
          </Route>
          <Route exact path="*">  
          <Error></Error>       
          </Route>
         </Switch>
         <Footer></Footer>
       </Router>
    </div>
  );
}

export default App;

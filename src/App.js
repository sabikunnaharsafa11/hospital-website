import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Header from './components/Header/Header';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import Details from './components/Details/Details';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';



function App() {
  return (
    <div>    
      <AuthProvider>
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
          <Route exact path="/login">
          <Login></Login>
          </Route>
          <PrivateRoute exact path="/details">
             <Details></Details>
          </PrivateRoute>
          <Route exact path="*">  
          <Error></Error>       
          </Route>
         </Switch>
         <Footer></Footer>
       </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

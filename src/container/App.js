
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'firebase/auth';
import Home from '../components/pages/Home/Home';
import Login from '../components/pages/Login/Login';
import UserDashBoard from '../components/pages/UserDashBoard/UserDashBoard';
import Admin from './../components/pages/Admin/Admin';
import firebaseAppInit from '../config/firebase/firebaseAppInit';
import LoginContextProvider from '../context/loginContext';
import './App.css';
import PrivateRoute from '../Route/PrivateRoute/PrivateRoute';
import AdminPrivateRoute from '../Route/AdminPrivateRoute/AdminPrivateRoute';

firebaseAppInit();

function App() {
  
  return (
    <LoginContextProvider>
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <PrivateRoute path="/admin">
          <AdminPrivateRoute path="/admin">
            <Admin />
          </AdminPrivateRoute>
        </PrivateRoute>
        <PrivateRoute path="/user">
          <UserDashBoard />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        
      </Switch>
    </BrowserRouter>
    </LoginContextProvider>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import ClassicRoutes from './routes/Classic';
import AuthRoutes from './routes/AuthRoutes';
import "bootstrap/js/src/collapse";
import ScrollToTop from './utils/ScrollToTop';
import Signin from './Login/Signin';
import Signup from './Login/Signup';
import Forget from './Login/Forget';
import Dashboard from './views/Dashboard/index';
import { AuthProvider } from "./Login/AuthProvider";
import PrivateRoute from './Login/PrivateRoute';

function App() {

  const token = localStorage.getItem('Accessftoken');
  console.log(token, "qqqqqqqqqqqqqqqqqqqqqqq")

  return (
    <BrowserRouter>
      <ScrollToTop>
        <AuthProvider>
          <Switch>
            <Redirect exact from="/" to="/dashboard" />
            {/* <Route
              path="/signin"
              render={() => (token ? <Redirect to="/dashboard" /> : <Signin />)}
            />
            <Route
              path="/signup"
              render={() => (token ? <Redirect to="/dashboard" /> : <Signup />)}
            />
            <Route
              path="/forget"
              render={() => (token ? <Redirect to="/dashboard" /> : <Forget />)}
            />*/}
            {/* <Route
              path="/dashboard"
            nder={() => (token ? <Dashboard /> : <Redirect to="/signin" />)}
            />  */}
            {/* <Route path="/signin" component={Signin} /> */}
            {/* <Route path="/auth" render={(props) => <AuthRoutes {...props} />} /> */}
            {token ?

             <>
             <Dashboard /> 
             {/* <PrivateRoute path="/" render={(props) => <ClassicRoutes {...props} />} />
             < Redirect exact from="/" to="/dashboard" /> */}
             </> 
              :
              <Route path="/signin" component={Signin} />
            }
          </Switch>
        </AuthProvider>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
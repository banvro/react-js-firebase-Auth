import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import ClassicRoutes from './routes/Classic';
import AuthRoutes from './routes/AuthRoutes';
import "bootstrap/js/src/collapse";
import ScrollToTop from './utils/ScrollToTop';
import Signin from './Login/Signin';
import Signup from './Login/Signup';
import Forget from './Login/Forget';
import Dashboard from './views/Dashboard';
import { AuthProvider } from './Login/AuthProvider';

function App() {
  const token = localStorage.getItem('Accesstoken');
  console.log(token, "qqqqqqqqqqqqqqqqqqqqqqq");

  return (
    <BrowserRouter>
      <ScrollToTop>
        <AuthProvider>
          <Switch>
            <Redirect exact from="/" to="/dashboard" />
            <Route
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
            />
            <Route
              path="/dashboard"
              render={() => (token ? <Dashboard /> : <Redirect to="/signin" />)}
            />
            <Route path="/auth" render={(props) => <AuthRoutes {...props} />} />
            <Route path="/" render={(props) => <ClassicRoutes {...props} />} />
          </Switch>
        </AuthProvider>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;

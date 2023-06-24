import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import ClassicRoutes from './routes/Classic';
import AuthRoutes from './routes/AuthRoutes';
import "bootstrap/js/src/collapse";
import ScrollToTop from './utils/ScrollToTop';
import Signin from './Login/Signin';
import Signup from './Login/Signup';
import Forget from './Login/Forget';
import { AuthProvider } from "./Login/AuthProvider";
function App() {
  return (
    <>
    {/* <Signin/> */}
    {/* <Signup/> */}
    {/* <Forget/> */}
      <BrowserRouter>
        <BrowserRouter >
          <ScrollToTop>
          <AuthProvider>
            <Switch>
              <Redirect exact from="/" to="/dashboard" />
              <Route path="/signin" component={Signin} />
              <Route path="/signup" component={Signup} />
              <Route path="/forget" component={Forget} />
              
              <Route path="/auth" render={(props) => <AuthRoutes {...props} />} />
        
              <Route path="/" render={(props) => <ClassicRoutes {...props} />} />
       
            </Switch>
            </AuthProvider>
          </ScrollToTop>
        </BrowserRouter>
      </BrowserRouter>
    </>
  );
}

export default App;

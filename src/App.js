import logo from './logo.svg';
import './App.css';

import { Link, Route ,Routes,Navigate} from 'react-router-dom';

import Signin from './components/Signin';
import Signup from './components/Signup';
import AuthDetails from './AuthDetails';
import Dashboard from './components/Dashboard';

function App() {
  const isAuthenticated = false;
 
  return (


<>
{/* <Dashboard/>

<Signin/>
<Signup/> */}
<AuthDetails/>




<Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/signin" />}
        />
      </Routes>




</>
    );
}

export default App;

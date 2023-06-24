import React,{useContext} from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth,AuthProvider } from '../Login/AuthContext'
// import { AuthPruseContextovider } from "../Login/AuthProvider"
export default function PrivateRoute({ component: Component, ...rest }) {
  // const { user } = useContext(AuthProvider)
  const { currentUser } = useAuth()
  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : <Redirect to="/signin" />
      }}
    ></Route>
  )
}
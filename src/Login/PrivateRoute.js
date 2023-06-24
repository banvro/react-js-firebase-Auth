import React,{useContext} from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from '../Login/AuthProvider'
import { AuthPruseContextovider } from "../Login/AuthProvider"
export default function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useContext(useContext)
  return (
    <Route
      {...rest}
      render={props => {
        return user ? <Component {...props} /> : <Redirect to="/signin" />
      }}
    ></Route>
  )
}
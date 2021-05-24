import React from 'react';
import { Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, token, ...rest }) => {
  return (
    <Route {...rest} render={
      props => {
        if (token) {
          return <Component {...rest} {...props} />
        } else {
          console.log("no token")
        }
      }
    } />
  )
}

export default ProtectedRoute;
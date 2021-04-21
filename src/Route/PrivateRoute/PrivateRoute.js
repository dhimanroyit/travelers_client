import React, {useContext} from 'react';
import {Redirect, Route} from 'react-router-dom';
import { loginContext } from '../../context/loginContext';

function PrivateRoute({children, ...rest}) {
  const {loginUser} = useContext(loginContext);
  return (
    <Route
      {...rest} 
      render={({location}) => loginUser.login ? (
        children
      ) : (
        <Redirect to={{
          pathname: "/login",
          state: {from: location}
        }} />
      )}
    />
  )
}

export default PrivateRoute
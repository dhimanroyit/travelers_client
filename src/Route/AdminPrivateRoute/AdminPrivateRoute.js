import React, {useContext} from 'react';
import {Link, Route} from 'react-router-dom';
import Button from '../../components/Button/Button';
import { loginContext } from '../../context/loginContext';

function AdminPrivateRoute({children, ...rest}) {
  const {loginUser} = useContext(loginContext);
  return (
    <Route
      {...rest} 
      render={({location}) => loginUser.login && loginUser.isAdmin ? (
        children
      ) : (
        <div className="w-full h-screen grid place-items-center">
          <div>
          <h1 className="text-2xl capitalize mb-6">you are not admin user</h1>
          <Link to="/">
            <Button>Back to Home Page</Button>
          </Link>
          </div>
        </div>
      )}
    />
  )
}
export default AdminPrivateRoute;
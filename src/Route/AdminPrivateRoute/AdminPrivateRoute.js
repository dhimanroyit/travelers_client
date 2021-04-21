import React, {useContext, useEffect} from 'react';
import {Link, Route} from 'react-router-dom';
import axios from 'axios';
import Button from '../../components/Button/Button';
import { loginContext } from '../../context/loginContext';

function AdminPrivateRoute({children, ...rest}) {
  const {loginUser, setLoginUser} = useContext(loginContext);
  useEffect(() => {
    axios.get(`/admin/${loginUser.email}`)
    .then(data => {
      setLoginUser({
        ...loginUser,
        isAdmin: true,
      })
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
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
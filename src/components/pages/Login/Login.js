import React, {useContext} from 'react'
import firebase from 'firebase/app';
import ButtonAuth from '../../ButtonAuth/ButtonAuth'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { loginContext } from './../../../context/loginContext';
import {useHistory, useLocation} from 'react-router-dom';


function Login() {
  const {loginUser, setLoginUser} = useContext(loginContext);
  console.log(loginUser);

  const history = useHistory()
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const googleLoginHandler = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
              const {displayName, email,photoURL} = result.user;
              const loginUserData = {
                login: true,
                name: displayName,
                email,
                photo: photoURL,
              }
              setLoginUser(
                {
                  ...loginUser,
                  ...loginUserData,
                }
              )
              history.replace(from);
            }).catch(err => {
              console.log(err);
            });
  }
  return (
    <div className="h-screen w-full grid place-items-center">
      <div className="">
        <h1 className="font-bold text-2xl text-center">Travelers</h1>
        <h2 className="text-center mb-4 font-bold">Login</h2>
        <ButtonAuth clicked={googleLoginHandler} icon={faGoogle}>Continue with google</ButtonAuth>
      </div>
    </div>
  )
}

export default Login

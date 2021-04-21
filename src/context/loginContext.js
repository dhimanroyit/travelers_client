import {createContext, useState} from 'react';

export const loginContext = createContext();

const LoginContextProvider = ({children}) => {
  const [loginUser, setLoginUser] = useState({
    login: false,
    isAdmin: false,
    name: "",
    email: "",
    photo: "",
  });

const loginData = {
  loginUser,
  setLoginUser
}

  return (
    <loginContext.Provider value={loginData}>
      {children}
    </loginContext.Provider>
  )
}

export default LoginContextProvider;
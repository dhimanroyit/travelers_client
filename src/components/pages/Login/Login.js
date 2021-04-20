import React from 'react'
import ButtonAuth from '../../ButtonAuth/ButtonAuth'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

function Login() {
  return (
    <div className="h-screen w-full grid place-items-center">
      <div className="">
        <h1 className="font-bold text-2xl text-center">Travelers</h1>
        <h2 className="text-center mb-4 font-bold">Login</h2>
        <ButtonAuth icon={faGoogle}>Continue with google</ButtonAuth>
      </div>
    </div>
  )
}

export default Login

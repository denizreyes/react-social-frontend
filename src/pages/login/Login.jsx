import React from 'react'

import '../../assets/css/login.scss'

const Login = () => {
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo">Social App</h3>
          <span className="login-desc">Connect with friends and the world around you on Social App!</span>
        </div>
        <div className="login-right">
          <div className="login-box">
            <input className="login-input" type="text" placeholder="Correo"/>
            <input className="login-input" type="text" placeholder="Password"/>
            <button className="login-btn_login">Ingresar</button>
            <span className="login-forgot">Olvidaste tu contraseña</span>
            <button className="login-btn_register">Crear cuenta</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

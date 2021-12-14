import React from 'react'

export const LoginScreen = ({ loguear }) => {
  return (
    <div className="login_content">
      <div className="form-login">
        <h1>Log in</h1>

        <div className="google-btn" onClick={loguear}>
          <div className="google-icon-wrapper">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="google button"
            />
          </div>

          <div className="text-content">
            <b>Sign in with google</b>
          </div>
        </div>
      </div>
    </div>
  )
}

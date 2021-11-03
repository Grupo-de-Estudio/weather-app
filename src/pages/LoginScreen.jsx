import React from 'react'

export const LoginScreen = () => {
    return (
        <div className='login_content'>
            <div>
                <h5>Log in</h5>
                <form className='form_login' action="">
                    <input className='input_login' type="text" name='usuaruio' placeholder='Usuario'/>
                    <input className='input_login' type="password" name='password' placeholder='Contraseña'/>
                    <button type='submit'>Iniciar sesion</button>
                </form>
            </div>
        </div>
    )
}

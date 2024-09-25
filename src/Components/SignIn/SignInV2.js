import './SignIn.css';
import "@fontsource/caveat"; // Defaults to weight 400
import { ReactComponent as Logo } from './logo.svg'
import { ReactComponent as Show } from './show.svg'
import { ReactComponent as Hide } from './hide.svg'
import React, { useState } from 'react';



function SignIn() {

  const [show, setShow] = useState(false);

  return (
    <div className="App">
      
      <div className='topHalf'>
        <Logo className='logo'/>
      </div>

      <div className='bottomHalf'>

        <div className='inputContainer'>


            <div className='inputRow'>
              <input className="inputBox" placeholder='Email' />
             
            </div>

            <div className='inputRow'>
                <input className="inputBox" placeholder='Password' type={show ? null : "password"} maxLength={10}/>  
                {show ? <Hide className='passwordIcon' onClick={() => setShow(false)} /> : <Show onClick={() => setShow(true)} className='passwordIcon'/>}         
            </div>

            <div className='inputRow'>
              <a className='signInButton' href='www.google.com'>
                <p className='signInButtonText'>Sign In</p>
              </a>
            </div>
            


        </div>
   

     

        
        <div className='signUpBox'>
          <div className='forgotPassword'>
            <a className='forgotPasswordLink' href='/resetpassword'>Forgot your password?</a>
          </div>
          <div style={{height: '40%', width: '100%'}}/>
          <div className='signUpMessage'>
            <p className='signUpMessageText'> Dont have an account?</p>
            <div style={{width: '1%'}}/>
            <a className='signUpMessageLink' href='/signup'>Sign up</a>
          </div>
        </div>

      </div>
      

    
  

    </div>
  );
}

export default SignIn;

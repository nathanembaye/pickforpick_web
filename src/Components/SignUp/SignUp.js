import './SignUp.css';
import "@fontsource/caveat"; // Defaults to weight 400
import React, { useState } from 'react';
import { ReactComponent as Show }from '../SignIn/show.svg';
import { ReactComponent as Hide } from '../SignIn/hide.svg';


function SignUp() {

  const [show, setShow] = useState(false);

  return (
    <div className="signUpContainer">
      
      <div className='signUpTopHalf'>
        <div className='signUpHeaderTitleContainer'>
          <h1 className='signUpHeaderTitleStyle'>Sign up</h1>
        </div>
        <div className='signUpHeaderTextContainer'>
          <p className='signUpHeaderTextStyle'>Please enter the required account info</p>
        </div>
      </div>

      <div className='signUpMiddle'>
        <div className='signUpInputRow'><input className='signUpInput' placeholder='Display Name'/></div>
        <div className='signUpInputRow'><input className='signUpInput' placeholder='Username' maxLength={10}/></div>
        <div className='signUpInputRow'><input className='signUpInput' placeholder='Email'/></div>


        <div className='signUpInputRow'>
          <input className='signUpInput' placeholder='Password' type={show ? null : "password"} maxLength={10}/>
          {show ? <Hide className='signUpPasswordIcon' onClick={() => setShow(false)} /> : <Show onClick={() => setShow(true)} className='signUpPasswordIcon'/>}
        </div>


        <div className='signUpInputRow'>
          <a className='signUpButton' href='www.google.com'>
            <p className='signUpButtonText'>Next</p>
          </a>
        </div>
        

      </div>



      <div className='signUpBottomHalf'>
        <p className='signUpContactUsText'>Need help? Please contact us at support@pickforpick.com</p>
      </div>
      

    
  

    </div>
  );
}

export default SignUp;

import './ResetPassword.css';
import "@fontsource/caveat"; // Defaults to weight 400
import React from 'react';
import { ReactComponent as Lock } from './lock.svg'


function ResetPassword() {

  return (
    <div className="resetPasswordContainer">
      
      <div className='resetPasswordTopHalf'>
        <div className='resetPasswordHeaderTitleContainer'>
          <h1 className='resetPasswordHeaderTitleStyle'>Reset Password</h1>
        </div>
        <div className='resetPasswordHeaderTextContainer'>
          <p className='resetPasswordHeaderTextStyle'>The email you signed up with will receive a 6-digit code</p>
        </div>
      </div>

      <div className='resetPasswordMiddle'>
      <div style={{height: '3%'}}/>
        <Lock className='lockIcon'/>
        <div style={{height: '7%'}}/>
        <div className='resetPasswordInputRow'>
          <input className='resetPasswordInput' placeholder='Username'/>
        </div>

        <div className='resetPasswordInputRow'>
          <a className='resetPasswordButton' href='/verificationcode'>
            <p className='resetPasswordButtonText'>Send Code</p>
          </a>
        </div>
        <div className='resetPasswordInputRow'/>

      </div>



      <div className='resetPasswordBottomHalf'>
        <p className='resetPasswordContactUsText'>Need help? Please contact us at support@pickforpick.com</p>
      </div>
      

    
  

    </div>
  );
}

export default ResetPassword;

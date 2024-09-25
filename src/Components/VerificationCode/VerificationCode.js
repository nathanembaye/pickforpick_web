import './VerificationCode.css';
import "@fontsource/caveat"; // Defaults to weight 400
import React, { useState } from 'react';
import { ReactComponent as Show } from '../SignIn/show.svg';
import { ReactComponent as Hide } from '../SignIn/hide.svg';


function VerificationCode() {

    const [show, setShow] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);

  return (
    <div className="verificationCodeContainer">
      
      <div className='verificationCodeTopHalf'>
        <div className='verificationCodeHeaderTitleContainer'>
          <h1 className='verificationCodeHeaderTitleStyle'>New Password</h1>
        </div>
        <div className='verificationCodeHeaderTextContainer'>
          <p className='verificationCodeHeaderTextStyle'>Please enter a new password</p>
        </div>
      </div>

      <div className='verificationCodeMiddle'>
        <div className='verificationCodeInputRow'><input className='verificationCodeInput' placeholder='Verification Code' maxLength={10}/></div>

        <div className='verificationCodeInputRow'>
          <input className='verificationCodeInput' placeholder='Password' type={show ? null : "password"} maxLength={10}/>
          {show ? <Hide className='verificationCodePasswordIcon' onClick={() => setShow(false)} /> : <Show onClick={() => setShow(true)} className='verificationCodePasswordIcon'/>}
        </div>
        <div className='verificationCodeInputRow'>
          <input className='verificationCodeInput' placeholder='Confirm Password' type={showConfirmation ? null : "password"} maxLength={10}/>
          {showConfirmation ? <Hide className='verificationCodePasswordIcon' onClick={() => setShowConfirmation(false)} /> : <Show onClick={() => setShowConfirmation(true)} className='verificationCodePasswordIcon'/>}
        </div>


        <div className='verificationCodeInputRow'>
          <a className='verificationCodeButton' href='www.google.com'>
            <p className='verificationCodeButtonText'>Submit</p>
          </a>
        </div>
        

      </div>



      <div className='verificationCodeBottomHalf'>
        <p className='verificationCodeContactUsText'>Need help? Please contact us at support@pickforpick.com</p>
      </div>
      

    
  

    </div>
  );
}

export default VerificationCode;

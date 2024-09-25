import './SignIn.css';
import "@fontsource/caveat"; // Defaults to weight 400
import { ReactComponent as Logo } from './logo.svg'
import { ReactComponent as Show } from './show.svg'
import { ReactComponent as Hide } from './hide.svg'
import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import AuthContext from '../../authContext';
import { useNavigate } from 'react-router-dom';


function SignIn() {

  const navigate = useNavigate();
  const AuthContextState = React.useContext(AuthContext)
  
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  async function login() {
    try {
      const user = await Auth.signIn(username, password);
      AuthContextState.checkIn();
      navigate('/searchpage');
    } 

    catch (error) {
      if (error.message === 'User is not confirmed.'){
          alert(error.message + ' A new code hase been sent.')
      }
      else {
        alert(error.message)
      }
    }
  }

  
  return (
    <div className="App">
      
      <div className='topHalf'>
        <Logo className='logo'/>
      </div>

      <div className='bottomHalf'>

        <div className='inputContainer'>


            <div className='inputRow'>
              <input onChange={(e) => setUsername(e.target.value)} className="inputBox" placeholder='Username' />
             
            </div>

            <div className='inputRow'>
                <input onChange={(e) => setPassword(e.target.value)} className="inputBox" placeholder='Password' type={show ? null : "password"} maxLength={10}/>  
                {show ? <Hide className='passwordIcon' onClick={() => setShow(false)} /> : <Show onClick={() => setShow(true)} className='passwordIcon'/>}         
            </div>

            <div className='inputRow'>
              <button className='signInButton' onClick={() => login()}>
                <p className='signInButtonText'>Sign in</p>
              </button>
            </div>
            


        </div>
   

     

        
        <div className='signUpBox'>
          <div style={{height: '60%', width: '100%'}}/>
          <div style={{ display: 'flex',  width: '100%', height: '30%', alignSelf: 'center', justifyContent: 'center', flexDirection: 'row'}}>
            <p style={{ fontSize: 12, color: 'white', alignSelf: 'center', height: 'auto', width: '100%', textAlign: 'center'}}>Need help? Please contact us at support@pickforpick.com</p>
          </div>
        </div>

      </div>
      

    
  

    </div>
  );
}

export default SignIn;

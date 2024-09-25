import './App.css';
import "@fontsource/caveat"; // Defaults to weight 400
import SignIn from './Components/SignIn/SignIn.js';
import SignUp from './Components/SignUp/SignUp.js';
import ResetPassword from './Components/ResetPassword/ResetPassword.js';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import VerificationCode from './Components/VerificationCode/VerificationCode.js';
import SearchPage from './Components/SearchPage/SearchPage.js';


function App() {

return (
        <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/resetpassword" element={<ResetPassword/>}/>
            <Route path="/verificationcode" element={<VerificationCode/>}/>
            <Route path="/searchpage" element={<SearchPage/>}/>
        </Routes>
  );
}

export default App;

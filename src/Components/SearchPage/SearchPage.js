import './SearchPage.css';
import "@fontsource/caveat"; // Defaults to weight 400
import React from 'react';
import { ReactComponent as Logo } from '../SignIn/logo.svg';
import { ReactComponent as Search } from '../SearchPage/search.svg';
import Card from '../Card/Card.js';
function SearchPage() {
   

  return (
    <div className="searchPageContainer">
      
      <div className='searchPageTop'>
        <Logo className='searchPageLogo'/>
      </div>

      <div className='searchPageMiddle'>

      <div className='searchPageSearchBarContainer'>
        <input className="searchPageSearchBarInput" placeholder='Search'/>  
        <Search className='searchIcon'/>        
      </div>

      </div>

      <div className='searchPageBottom'>
        
          <div className='searchPageGridRow'>
            <Card/>
            <Card/>
            <Card/>
          </div>
          <div className='searchPageGridRow'>
            <Card/>
            <Card/>
            <Card/>
          </div>
      </div>
        

    </div>
  );
}

export default SearchPage;
 
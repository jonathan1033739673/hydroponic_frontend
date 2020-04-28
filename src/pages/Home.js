import React from 'react';

import NavBar from '../components/NavBar'
import '../styles/main.css';

function Home (){
    return (
      <div id="banner">
        <NavBar/>
          <h2>Hydroponics at Home</h2>
          <p>Lorem ipsum dolor sit amet nullam consequat <br /> interdum vivamus donce sed libero.</p>
      </div>
    );
}

export default Home;
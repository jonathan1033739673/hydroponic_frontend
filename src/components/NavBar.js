import React from 'react';

class NavBar extends React.Component{
    render(){
        return(
            <header id="header" >
                <nav >
                    <ul>
                    <li><a href="elements.html">Sign In</a></li>
                    <li><a href="elements.html">Sign Up</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default NavBar;
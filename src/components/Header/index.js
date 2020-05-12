import React from 'react';
import './style.css';

/**
* @author
* @function 
**/

const Header = (props) => {
  return(
    <header>
        <nav className="topnav">
            <div className="btn-group">
             <a href="/" ><button className="btn btn-dark">
                  Home
              </button>
              </a>
              <button className="btn btn-dark">
                  Men
              </button>
              <button className="btn btn-dark">
                  Women
              </button>
            </div>

            <div className="floatR">
             <a href='/path/signup'> <button className="btn btn-warning">Signup</button> </a>
             <a href='/path/login'> <button className="btn btn-warning">Login</button>   </a>

            </div>
            

        </nav>
    </header>
   )

 }

export default Header;
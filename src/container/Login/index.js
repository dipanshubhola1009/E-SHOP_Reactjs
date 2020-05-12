import React from 'react';
import './style.css'

/**
* @author
* @function Login
**/

const Login = (props) => {
  return(
    <div className="Login">
          <div className="LoginPic">
            <img className=" rounded-circle" src={require('./../Login/Login.jpg')} width="96%" height="96%" ></img>
          </div>

          <h3 align="center">Login</h3>

        <div className="LoginForm">
               <form action="http://localhost/phplesson/action.php" method="post">
                   <ul className="MyUl">
                   <li>
                   <label name='username' >
                       Username
                   </label>
                   </li>    
                   <li>
                   <input type="text" name='username' required></input>
                   </li>
                   <li>
                   <label name="password">
                       Password
                    </label>    
                   </li>
                   <li>
                       <input type='password' minLength='8' name='password'  required></input>
                   </li>
        
                   </ul>
                   
                   <input type="submit" className="btn btn-sm btn-primary"></input>
                   <input type="reset" className="btn btn-sm btn-warning"></input>
    
               </form>
        </div>
    </div>
   )

 }

export default Login
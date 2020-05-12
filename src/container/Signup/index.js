import React from 'react';
import './style.css';

/**
* @author
* @function Signup
**/

const Signup = (props) => {
  return(
    <div className="Login">
          <div className="LoginPic">
            <img className=" rounded-circle" src={require('./../Login/Login.jpg')} width="96%" height="96%" ></img>
          </div>

          <h3 align="center">SignUp</h3>

        <div className="LoginForm">
               <form action="http://localhost/phplesson/signup.php" method="Post">
                   <ul className="MyUl">
                   <li>
                   <label name='Name' >
                       Name
                   </label>
                   <input type="text" name='Name' required></input>
                   </li>
                   <li>
                   <label name="phone">
                       Contact Number
                    </label>    
                    <input type='text' minLength='8' name='Phone'  required></input>
                   </li>
                   <li>
                   <label name="email">
                       Email
                    </label> 
                    <input name="Email" type="email" required></input>
                   </li>
                   <li>
                    SEX:
                    <select name="Sex">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                   </li>
                   <li>
                       Size:
                       <select name='Size'>
                           <option value="xS">XS</option>
                           <option value="S">S</option>   
                           <option value="M">M</option>
                           <option value="L">L</option> 
                           <option value="Xl">l</option>
                       </select>
                   </li>
                   <li>
                       Set Password
                       <input name='password' required></input>
                   </li>
                   </ul>
                 
                 
                   <input type="submit" className=" btn btn-sm btn-primary"></input>
                   <input type="reset" className="btn btn-sm btn-warning"></input>
    
               </form>
        </div>
    </div>
   )

 }

export default Signup
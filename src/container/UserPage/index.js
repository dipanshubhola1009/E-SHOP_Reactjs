import React from 'react';
import './style.css';
import UserData from './../../Displaydata/signupdb.json';


/**
* @author
* @function UserPage
**/

const UserPage = (props) => {
  
    const user=props.match.params.Email;
    const Nuser =UserData.UserData.find(Nuser=>Nuser.Email==user);
  

  return(
    <div className="UserPage">
            <h1>Welcome</h1>
    
            <div className="row">
                
                <div className="Col">
                    <div className="PresonalDetail">
                        <img className="img rounded-circle" src={require('./../Login/Login.jpg')} width="90px" ></img>
                        <div className="UserName">{Nuser.Name.toLocaleUpperCase()} </div>
                        <hr/>
                        <div className="UserEmail">{Nuser.Email}</div>
                        <div className="UserEmail">{Nuser.Phone}</div>
                        <button className=" button btn-sm btn-dark">Reset</button>
                    </div>
                   
                </div>
                
            </div>
    </div>
   )

 }

export default UserPage
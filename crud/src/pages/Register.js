import React from 'react'
import {Link} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { addUser } from "../features/Credentials";
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = React.useState('') //initialize name
    const [pass, setPass] = React.useState('') //initialize pass


  return (
    <div className='Container'>
    <div className='loginDiv'>
      <h2>Register</h2>
      <div className="InpDiv">
        {/* Setting Inputs to our states, name and pass. */}

           <input className='Inp' placeholder='username' onChange={(event) => {
            setName(event.target.value)
            }}/>
           <input type="password" className='Inp' placeholder='password' onChange={(event) => {
            setPass(event.target.value)
           }}/>
      </div>

      {/* Calling addUser function from ../features/Credentials.js and dispatching it with our name and pass states. */}
      <button className='loginBtn' onClick={() => {
            dispatch(
              addUser({
                name,
                pass,
              })
            );
            navigate('/')}}>Register</button>
      <Link to="/">Login</Link>
    </div>
  </div>
  )
}

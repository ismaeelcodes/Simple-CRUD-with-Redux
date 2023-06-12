import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const userCred = useSelector((state) => state.users.value);
    const navigate = useNavigate();
    const [name, setName] = React.useState('')
    const [pass, setPass] = React.useState('')
    

  return (
    <div className='Container'>
    <div className='loginDiv'>
      <h2>Log In</h2>
      <div className="InpDiv">
      <input className='Inp' placeholder='username' onChange={(event) => {
            setName(event.target.value)
        }}/>
        <input type="password" className='Inp' placeholder='password' onChange={(event) => {
            setPass(event.target.value)
        }}/>
      </div>
      <button className='loginBtn' onClick={() => {
          name == userCred.name && pass == userCred.pass && navigate('/Home')
      }}>Login</button>
      <Link to="/register">Register</Link>
    </div>
  </div>
  )
}

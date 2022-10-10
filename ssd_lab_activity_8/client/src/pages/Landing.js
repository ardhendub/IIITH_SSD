// import logo from './logo.svg';

import './App.css';
import { useState } from 'react';

function Landing() {
  sessionStorage.setItem("curr_roll","")
  sessionStorage.setItem("order","")
  const [roll, setRoll] = useState('')
	const [password, setPassword] = useState('')
  const [role,setType] = useState('')

  async function loginFunc(event){
    event.preventDefault()
    const response = await fetch('http://localhost:3005/api/login',{
      method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
      body: JSON.stringify({
        roll,password,
        role
      }),
    })

    const data = await response.json();

    if(data.user){
      alert('Login successful')
      sessionStorage.setItem("curr_roll", roll)
      if(role==="TA"){
        sessionStorage.setItem("order","TA")
      }
      else if(role==="student"){
        sessionStorage.setItem("order","student")
      }
      window.location.href='/dash'
    }
    else{
      alert('Please check your username and password')
    }
    
    console.log(data);
  }

  async function signupFunc(event){
    event.preventDefault()
    const response = await fetch('http://localhost:3005/api/signup',{
      method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
      body: JSON.stringify({
        roll,password,
        role
      }),
    })

    const data = await response.json();
    if(data.user){
      alert('SignUp Sucessful!!');
    }
    else{
      alert('Duplicate User');
    }
    console.log(data);
  }

  return (
    <div className="App">
      <h1>Re-Eval Portal</h1>
      <form>
        <input value={roll} onChange={(e)=>setRoll(e.target.value)} type="text" placeholder="Roll Number"/><br/>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="password"/><br/>
        <select value={role} onChange={(e)=>setType(e.target.value)}>
          <option value="none" selected="selected" hidden>Select an Option</option>
          <option value="student">Student</option>
          <option value="TA">TA</option>
        </select><br/>
        <button type='button' onClick={loginFunc}>Login</button>
        <button type='button' onClick={signupFunc}>Sign Up</button>
      </form>
    </div>
  );
}

export default Landing;

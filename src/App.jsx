import { useState } from 'react'

import './App.css'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
function App() {
  const [uname, setuname] = useState("")
  const [upass, setupass] = useState("")
  const navigate = useNavigate()
  const handleuser = (e) => {
    setuname(e.target.value)
  }
  const handlepass = (e) => {
    setupass(e.target.value)
  }
  const checkpage = () => {
    const details = axios.post("https://login-form-express-1.onrender.com/login",{"username":uname,"password":upass})
    details.then((data) => {
      if(data.data===true)
      navigate("/success")
    else{
      navigate("/fail")

    }
    })
    

  }
  return (
    <>
      <div className="container">
        <div className="login-box">
          <h1 style={{color:"Red"}}>Login</h1>
          <input type="text" placeholder="Username" onChange={handleuser} name="username" className="input-field" />
          <input type="password" placeholder="Password" onChange={handlepass} name="password" className="input-field" />
          <button type="submit" onClick={checkpage} className="login-button">Login</button>
        </div>
      </div>

    </>
  )
}

export default App

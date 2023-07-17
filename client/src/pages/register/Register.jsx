import "./register.css"
import { Link } from "react-router-dom";
import {useState} from "react";
import axios from "axios";

export default function Register() {
  const[username, setUsername] = useState("")
  const [email,setEmail] = useState("")
  const[password,setPassword] = useState("")
 const handleSubmit = async (e) =>{
  e.preventDefault();
  const res =await axios.post("/auth/register",{
    username,email,password,
  });
  console.log(res);
 };
  return(
    <div className="register">
        <span className="registerTitle">REGISTER</span>
      <form className="registerForm" onSubmit={handleSubmit}>
      <label >Username</label>
        <input type="text" className="registerInput" placeholder="Enter your Name">
          onChange={e=> setUsername(e.target.value)}
        </input>
        <label >Email</label>
        <input type="text" className="registerInput" placeholder="Enter your Email">
          onChange={e=>setEmail(e.target.value)}
        </input>
        <label >Password</label>
        <input type="password" className="registerInput" placeholder="Enter your password">
        onChange={e=>setPassword(e.target.value)}
        </input>
        <button className="registerSubmit" type="submit">Register</button>
      </form>
      <button className="LoginButton">
      <Link className="link" to="/login">REGISTER</Link>
     
      </button>
    </div>
  )
}

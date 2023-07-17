import "./register.css"
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">REGISTER</span>
      <form className="registerForm">
      <label >Username</label>
        <input type="text" className="registerInput" placeholder="Enter your Name"></input>
        <label >Email</label>
        <input type="text" className="registerInput" placeholder="Enter your Email"></input>
        <label >Password</label>
        <input type="password" className="registerInput" placeholder="Enter your password"></input>
        <button className="registerSubmit">Register</button>
      </form>
      <button className="LoginButton">
      <Link className="link" to="/login">REGISTER</Link>
     
      </button>
    </div>
  )
}

import "./register.css"

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
      <button className="LoginButton">Login</button>
    </div>
  )
}

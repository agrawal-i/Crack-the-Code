import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">LOGIN</span>
      <form className="loginForm">
        <label >Email</label>
        <input type="text" className="loginInput" placeholder="Enter your Email"></input>
        <label >Password</label>
        <input type="password" className="loginInput" placeholder="Enter your password"></input>
        <button className="loginSubmit">Login</button>
      </form>
      <button className="RegisterButton">Register</button>
    </div>
  )
}

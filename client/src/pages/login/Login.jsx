import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <span className="logintitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input type="text" placeholder="enter your email" />
        <label>Password</label>
        <input type="password" placeholder="enter your email" />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link to="/register" className="link">
          Register
        </Link>
      </button>
    </div>
  );
}

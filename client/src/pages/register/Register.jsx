import "./register.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
      <span className="registertitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input type="text" placeholder="enter your username" />
        <label>Email</label>
        <input type="text" placeholder="enter your email" />
        <label>Password</label>
        <input type="password" placeholder="enter your email" />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link to="/login" className="link">
          LOGIN
        </Link>
      </button>
    </div>
  );
}

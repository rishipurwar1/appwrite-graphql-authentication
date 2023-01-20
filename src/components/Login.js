import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user)
  };
  
  return (
    <div className="container">
      <h1 className="heading">Log In Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <button className="submit-btn">Log In</button>
      </form>
      <p className="account">
        Don't have an account yet? <Link to="/signup">Sign up</Link>.
      </p>
    </div>
  );
};

export default Login;

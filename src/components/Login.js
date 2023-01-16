import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <h1 className="heading">Log In Form</h1>
      <form>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
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

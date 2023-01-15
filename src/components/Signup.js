import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="container">
      <h1 className="heading">Sign Up Form</h1>
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
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
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
        <button className="submit-btn">Sign Up</button>
      </form>
      <p>
        Already have an account! <Link to="/login">Log in</Link>.
      </p>
    </div>
  );
};

export default Signup;

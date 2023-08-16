import "./SignUp.css";

const SignUp = () => {
  <div className="form-container">
    <h2 className="form-title">Login</h2>
    <form action="" className="form">
      <div className="form-control">
        <label htmlFor="">Email</label>
        <input type="email" name="email" required />
      </div>
      <div className="form-control">
        <label htmlFor="">Password</label>
        <input type="password" name="password" required />
      </div>
      <input type="submit" className="login-btn" value="Login" />
      <p>
        New to website <span>Create a New Account</span>
      </p>
      <br />
      <input
        type="submit"
        className="google-btn"
        value="Continue with Google"
      />
    </form>
  </div>;
};

export default SignUp;

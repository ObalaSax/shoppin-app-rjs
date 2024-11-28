import "../SignInSignUp/SignIn.css"
function SignInSignUp() {
  return (
    <div className="signIn">
      <div className="signIn-container">
        <h1>Sign In</h1>
        <form action="">
          <div className="signIn-inputs">
            <input type="text" placeholder="Enter Email or username" />
          </div>
          <div className="signIn-inputs">
            <input type="text" placeholder="Enter Password" />
          </div>
          
          <div className="signIn-btn">
            <p>Don't have an account ? <a href="/signup">Sign up</a></p>
          </div>


          <a href="" className="the-btn">SignIn</a>


        </form>
      </div>
    </div>
  );
}

export default SignInSignUp;

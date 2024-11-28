import "../SignInSignUp/SignUp.css"
function SignUp(){
    return(
        <div className="signup">
            <div className="signup-container">
                <h1>Sign Up</h1>
                <form action="">
                    <div className="signup-inputs">
                        <input type="text" placeholder="firstName" name="client-firstName" />
                    </div>
                    <div className="signup-inputs">
                        <input type="text" placeholder="lastName" name="client-lastName" />
                    </div>
                    <div className="signup-inputs">
                        <input type="text" placeholder="username" name="client-username" />
                    </div>
                    <div className="signup-inputs">
                        <input type="text" placeholder="Enter Email" name="client-email"/>
                    </div>
                    <div className="signup-inputs">
                        <input type="text" placeholder="Enter Address" name="clientAddress" />
                    </div>
                    <div className="signup-inputs">
                        <input type="text" placeholder="password" name="client-password"/>
                    </div>
                    <div className="signup-inputs">
                        <input type="text" placeholder="confirmPassword" name="client-confirmPassword"/>
                    </div>
                    

                    <div className="signup-btn">
                        <p>Already have an account ? <a href="/signin">Sign In</a></p>
                    </div>


                    <a href="" className="the-signupbtn">SignUp</a>


                </form>
            </div>
        </div>
    );
}

export default SignUp;
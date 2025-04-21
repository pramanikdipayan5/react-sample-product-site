import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import '../Assets/Login.css';

const Login = () => {
  const { isLoggedIn, login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (isLoggedIn === true) {
      // Redirect to dashboard if the user is already logged in
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]);

  const handleLogin = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const reggisteredUsers = JSON.parse(localStorage.getItem("users") || "[]");
    let userExist = false;
    let isValidCredentials = false;
    if (reggisteredUsers) {
      for (let i = 0; i < reggisteredUsers.length; i++) {
        // Check if the email is already registered or not.
        userExist = (email == reggisteredUsers[i].userData.email) ? true : false;
        // If registered, check if the password is correct or not.
        isValidCredentials = userExist && (password == reggisteredUsers[i].userData.password) ? true : false;
        if (userExist && isValidCredentials) {
          break; // Exit the loop if user is found and credentials are valid
        }

      }
    }
    if (!userExist) {
      setErrorMessage("User not found with this email ID.");
      return;
    }
    else if (!isValidCredentials) {
      setErrorMessage("Invalid credentials. Please try again.");
      return;
    }
    else {
      // Set local storage to indicate the user is logged in
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("loggedInUser", JSON.stringify({ email }));
      login({ email });
      // Redirect to dashboard or perform any other action
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      { errorMessage && (
          <div className='login-error-message'>
            {errorMessage}
          </div>
        )
      }
      <form onSubmit={handleLogin}>
        <div className="Field">
          <label>
            Email address <sup>*</sup>
          </label>
          <input
            type="email"
            id='email'
            name='email'
            placeholder="Email address"
            required
          />
        </div>
        <div className="Field">
          <label>
            Password <sup>*</sup>
          </label>
          <input
            type="password"
            placeholder="Password"
            id='password'
            name='password'
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="signup-link">
        <p>Don't have an account? <a href="/signup">Sign up</a></p>
      </div>
    </div>
    );
}

export default Login;
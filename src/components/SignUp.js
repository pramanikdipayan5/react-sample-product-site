import {useState, useContext, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import '../Assets/SignUp.css'
import { AuthContext } from "./AuthContext";

const Signup = () => {

    const navigate = useNavigate();
    const { isLoggedIn } = useContext(AuthContext);
    
    useEffect(() => {
        if (isLoggedIn == true) {
        
        // Redirect to Dashbaord page if the user is logged in.
        navigate("/dashboard");
        }
    }, [isLoggedIn]);

    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState(""); 
    const [email, setEmail] = useState({
      value: "", 
      isTouched: false, 
    }); 
    const [password, setPassword] = useState({ 
      value: "", 
      isTouched: false, 
    }); 
    const [role, setRole] = useState("role");
    const [submitStatus, setSubmitStatus] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const clearForm = () => { 
        setFirstName(""); 
        setLastName(""); 
        setEmail({
          value: "", 
          isTouched: false,
        }); 
        setPassword({ 
          value: "", 
          isTouched: false, 
        }); 
        setRole("role"); 
      }; 

    const handleSubmit = (e) => {
      e.preventDefault();
      let userExist = false;
      const reggisteredUsers = JSON.parse(localStorage.getItem("users") || "[]");
      if (reggisteredUsers) {
        reggisteredUsers.map((reguser) => {
            userExist = (email.value == reguser.userData.email) ? true : false
        })
      }
      if (!userExist) {
        let userData = {
            name: firstName,
            lastName: lastName,
            email: email.value,
            password: password.value,
            role: role
        };
        reggisteredUsers.push({userData});
        localStorage.setItem('users', JSON.stringify(reggisteredUsers));
        setSubmitStatus("success");
        clearForm();
      }
      else {
        setSubmitStatus("error");
        setErrorMessage("User already exist with this email ID.");
      }
    };

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    };

    const getIsFormValid = () => { 
        return ( 
          firstName && 
          validateEmail(email.value) && 
          password.value.length >= 8 && 
          role !== "role" 
        ); 
      };

    const PasswordErrorMessage = () => { 
      return ( 
        <p className="FieldError">Password should have at least 8 characters</p> 
      ); 
    };

    const EmailErrorMessage = () => {
        return ( 
            <p className="FieldError">Provide in correct format</p> 
          );
    };

    return ( 
        <div className="signup-form">
          <div className="form-submission-status">
            {submitStatus === 'success' && (
            <p style={{ color: 'green' }}>Form submitted successfully & Account created!</p>
            )}
    
            {submitStatus === 'error' && (
            <p style={{ color: 'red' }}>Error: {errorMessage}</p>
            )}
          </div>
          <form onSubmit={handleSubmit}> 
            <fieldset> 
              <h2>Sign Up</h2> 
              <div className="Field"> 
                <label> 
                  First name <sup>*</sup> 
                </label> 
                <input 
                  value={firstName} 
                  onChange={(e) => { 
                    setFirstName(e.target.value); 
                  }} 
                  placeholder="First name" 
                /> 
              </div> 
              <div className="Field"> 
                <label>Last name</label> 
                <input 
                  value={lastName} 
                  onChange={(e) => { 
                    setLastName(e.target.value); 
                  }} 
                  placeholder="Last name" 
                /> 
              </div> 
              <div className="Field"> 
                <label> 
                  Email address <sup>*</sup> 
                </label> 
                <input 
                  value={email.value} 
                  onChange={(e) => { 
                    setEmail({...email, value: e.target.value}); 
                  }}
                  onBlur={() => { 
                    setEmail({ ...email, isTouched: true }); 
                  }}
                  placeholder="Email address" 
                />
                {email.isTouched && !validateEmail(email.value) ? ( 
                  <EmailErrorMessage /> 
                ) : null} 
              </div> 
              <div className="Field"> 
                <label> 
                  Password <sup>*</sup> 
                </label> 
                <input 
                  value={password.value} 
                  type="password" 
                  onChange={(e) => { 
                    setPassword({ ...password, value: e.target.value }); 
                  }} 
                  onBlur={() => { 
                    setPassword({ ...password, isTouched: true }); 
                  }} 
                  placeholder="Password" 
                /> 
                {password.isTouched && password.value.length < 8 ? ( 
                  <PasswordErrorMessage /> 
                ) : null} 
              </div> 
              <div className="Field"> 
                <label> 
                  Role <sup>*</sup> 
                </label> 
                <select value={role} onChange={(e) => setRole(e.target.value)}> 
                  <option value="role">Role</option> 
                  <option value="individual">Individual</option> 
                  <option value="business">Business</option> 
                </select> 
              </div> 
              <button type="submit" disabled={!getIsFormValid()}> 
                Create account 
              </button> 
            </fieldset>
          </form> 
        </div> 
      );
}

export default Signup;
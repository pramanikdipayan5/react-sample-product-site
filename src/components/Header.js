import logo from '../logo.svg';
import Images from '../Images.jpg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../Assets/Header.css';

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");

    const logoutHandler = (data) => {
      //setDataFromChild(data);
    };

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        const registeredUsers = JSON.parse(localStorage.getItem("users") || "[]");
        console.log(registeredUsers);
        if (loggedInUser) {
            if (registeredUsers) {
                registeredUsers.map((reguser) => {
                    // Check if the email is already registered or not.
                    setUserName((loggedInUser.email == reguser.userData.email) ? reguser.userData.name : 'User');
                })
            }
            setIsLoggedIn(true);
        }
        else {
            setIsLoggedIn(false);
        }
    }
    , []);

  return (
    <div className="header-section">
      <div className="header-logo-img">
        <img
         src={Images}
         alt="logo"
        />
      </div>
      <div className="user-account">
        {isLoggedIn ? (
          <div className="user-account-loggedin">
            <span className="user-name"> Hi {userName}</span>
            <Link to='/dashboard'>Dashbaord</Link>
            <Link to='/logout'>Logout</Link>
          </div>
        ) : (
          <div className="user-account-loggedout">
            <Link to='/signup'> Sign Up </Link>
            <Link to='/login'> Log In </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
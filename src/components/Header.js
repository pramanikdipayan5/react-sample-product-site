import Images from '../Images.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { AuthContext } from "./AuthContext";
import '../Assets/Header.css';

const Header = () => {

    const { isLoggedIn, loggedInUser, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        const userEmail = loggedInUser?.email;
    }, [isLoggedIn]);

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
            <span className="user-name"> Hi {loggedInUser?.email}</span>
            <Link to='/dashboard'>Dashbaord</Link>
            <button onClick={logout}>Logout</button>
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
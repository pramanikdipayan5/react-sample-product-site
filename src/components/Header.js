import Images from '../Images.jpg';
import { Link } from 'react-router-dom';
//import { useEffect, useContext } from 'react';
//import { useEffect } from 'react';
//import { AuthContext } from "./AuthContext";
import '../Assets/Header.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../Utils/userSlice';

const Header = () => {

    //const { isLoggedIn, loggedInUser, logout } = useContext(AuthContext);
    const isLoggedIn = useSelector((store) => store.user.isLoggedIn);
    const loggedInUser = useSelector((store) => store.user.userData);
    const dispatch = useDispatch();
    // useEffect(() => {
    //     const userEmail = loggedInUser?.email;
    // }, [isLoggedIn]);

    const handleLogout = () => {
      dispatch(logout());
    }

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
            <button onClick={() => {handleLogout()}}>Logout</button>
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
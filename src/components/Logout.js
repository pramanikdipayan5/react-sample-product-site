//import { useEffect, useContext } from 'react';
import { useEffect } from 'react';
import "../Assets/Logout.css";
import { Link } from 'react-router-dom';
//import { AuthContext } from "./AuthContext";
import { useNavigate } from 'react-router-dom';
import { logout } from '../Utils/userSlice';
import { useDispatch } from 'react-redux';

const Logout = () => {

    const dispatch = useDispatch();

    //const { logout } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(logout());
        navigate("/login");
    }, [navigate]);

    return (
        <div className="logout-section">
            <h1>You have been logged out</h1>
            <Link to="/login">Go to Login</Link>
        </div>
    );
}

export default Logout;
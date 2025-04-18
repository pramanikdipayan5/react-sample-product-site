import { useEffect } from 'react';
import "../Assets/Logout.css";
import { Link } from 'react-router-dom';
const Logout = () => {

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        if (!loggedInUser) {
            window.location.href = "/login";
        }
        else {
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("loggedInUser");
        }
    }, []);

    return (
        <div className="logout-section">
            <h1>You have been logged out</h1>
            <Link to="/login">Go to Login</Link>
        </div>
    );
}

export default Logout;
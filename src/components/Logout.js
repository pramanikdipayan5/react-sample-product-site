import { useEffect, useContext } from 'react';
import "../Assets/Logout.css";
import { Link } from 'react-router-dom';
import { AuthContext } from "./AuthContext";
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        logout();
        navigate("/login");
    }, [logout, navigate]);

    return (
        <div className="logout-section">
            <h1>You have been logged out</h1>
            <Link to="/login">Go to Login</Link>
        </div>
    );
}

export default Logout;
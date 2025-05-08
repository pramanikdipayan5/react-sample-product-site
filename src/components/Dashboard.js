import { Link, useNavigate } from 'react-router-dom';
//import { useEffect, useContext } from 'react';
import { useEffect } from 'react';
//import { AuthContext } from './AuthContext';
import { useSelector } from 'react-redux';
import '../Assets/Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();
    const userData = useSelector((store) => store.user);
    const isLoggedIn = userData.isLoggedIn;
    //const { isLoggedIn } = useContext(AuthContext);

    useEffect(() => {
      if (isLoggedIn !== true) {
        // Redirect to login page if the user is not logged in
        navigate("/login");
      }
    }, [navigate, isLoggedIn]);
  
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      <p><Link to="/product-list">See all the products</Link></p>
    </div>
  );
}

export default Dashboard;
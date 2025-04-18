import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../Assets/Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      if (isLoggedIn !== "true") {
        // Redirect to login page if the user is not logged in
        navigate("/login");
      }
    }, [navigate]);
  
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      <p><Link to="/product-list">See all the products</Link></p>
    </div>
  );
}

export default Dashboard;
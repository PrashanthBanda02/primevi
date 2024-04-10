import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom'; 
import './index.css'; 

function Navbar() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    // Prevent form submission
    event.preventDefault();
  };

  const handleKeyPress = (event) => {
    // Trigger search action on pressing Enter key
    if (event.key === 'Enter') {
      handleSearchSubmit(event);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="app-name">Primevi</span>
      </div>
      <div className="navbar-right">
        <Link exact to="/popular" className="nav-link" activeClassName="active-link">Popular</Link>
        <Link exact to="/topRated" className="nav-link" activeClassName="active-link">Top Rated</Link>
        <Link exact to="/upcoming" className="nav-link" activeClassName="active-link">Upcoming</Link>
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search movies..."
            className="search-input"
            value={searchValue}
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress}
          />
          <button type="submit" className="search-button">
            <i className="fa fa-search"><FaSearch /></i>
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;

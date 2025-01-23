import React from 'react'

function Header({ searchQuery, setSearchQuery, handleSearch }) {
  return (
    <header>
      <div className="header-top">
        <div className="logo-container">
          <img 
            src="./Image/NGO_logo.jpg" 
            alt="ASHA WELFARE SOCIETY Logo" 
            className="logo"
          />
          <h1>ASHA WELFARE SOCIETY</h1>
        </div>
        <div className="search-container">
          <form onSubmit={handleSearch}>
            <input
              type="search"
              className="search-bar"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#donate" className="donate-btn">Donate</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
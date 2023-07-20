import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
          <a className="navbar-brand" href="/">
            <img id="logo" src="/images/budgetup-logo.png" alt="BudgetUp Logo" style={{ width: '300px', height: 'auto' }}/>
          </a>
          {/* Add your navigation links or other content here */}
        </nav>
      </div>
    </header>
  );
};

export default Header;

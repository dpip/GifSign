import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="Header-Wrapper">
        <div className="Header-Title">
          <div className="Header-Text">GifSign</div>
        </div>
        <div className="Header-Displays">
          <div className="Header-Display-Blocks HDB-1"></div>
            <div className="Header-Display-Blocks HDB-2"></div>
              <div className="Header-Display-Blocks HDB-3"></div>
            <div className="Header-Display-Blocks HDB-4"></div>
          <div className="Header-Display-Blocks HDB-5"></div>
        </div>
      </div>
    );
  }
}

export default Header;

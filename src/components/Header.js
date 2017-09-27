import React from 'react';

const items = [
  { name: '1', link: 'josh' },
  { name: '2', link: 'luke' },
  { name: '3', link: 'michelle' },
  { name: '4', link: 'daniel' },
  { name: '5', link: 'lee' }
];

class Header extends React.Component {
  render() {

    return (
      <div className="Header-Wrapper">
        <div className="Header-Title">
          <div className="Header-Text">GifSign</div>
        </div>
        <div className="Header-Displays">
        
        </div>
      </div>
    );
  }
}

export default Header;

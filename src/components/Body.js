import React from 'react';

class Body extends React.Component {
  render() {
    return (
      <div className="Body-Container">
        <div className="Form-Container">
          <form action="" className="Gif-Input-Container">
            <input className="Gif-Search-Field" type="text" required placeholder="First Name"/>
            <input className="Gif-Search-Field" type="text" required placeholder="Question One"/>
            <input className="Gif-Search-Field" type="text" required placeholder="Question Two"/>
            <input className="Gif-Search-Field" type="text" required placeholder="Question Three"/>
            <input className="Gif-Search-Field" type="text" required placeholder="Question Four"/>
          </form>
        </div>
      </div>
    );
  }
}

export default Body;

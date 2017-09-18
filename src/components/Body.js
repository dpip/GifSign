import React from 'react';
const axios = require('axios');

class Body extends React.Component {

constructor() {
  super();
  this.state = { data: [], paginate: 0};
}

componentDidMount() {
  this.fetchData();
}

fetchData() {
  fetch(`https://api.giphy.com/v1/gifs/search?q=${this.props.query}&limit=${this.props.limit}&offset=${this.state.paginate}&api_key=fc9a16fbfd7c4db7a1b712483dc101a9`)
    .then(res => res.json())
    .then(data => this.setState({ data: data.data}));
}


  // Rendered JSX
  render() {
    return (
      <div className="Body-Container">
        <div>
          {this.state.data.map(gif => (
          <img key={gif.id}
               src={gif.images.fixed_width_small.url}
           />
        ))}
      </div>
        <div className="Form-Container">
          <form action="" className="Gif-Input-Container">
            <input
              onChange={event =>
                this.onInputChange(event.target.value)}
                 className="Gif-Search-Field Question Question-One"
              type="text" required placeholder="First Name"/>

            <input className="Gif-Search-Field Question Question-Two" type="text" required placeholder="Question One"/>
            <input className="Gif-Search-Field Question Question-Three" type="text" required placeholder="Question Two"/>
            <input className="Gif-Search-Field Question Question-Four" type="text" required placeholder="Question Three"/>
          </form>
        </div>
      </div>
    );
  }
}

export default Body;

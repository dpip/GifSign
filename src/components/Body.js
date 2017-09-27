import React from 'react';
const axios = require('axios');

const GIPHY_API_KEY = "fc9a16fbfd7c4db7a1b712483dc101a9"


class Body extends React.Component {


  // the giphy search parameters are an empty array (searchGif)
  // on key up fo the input value, push to searchGif array
  // if the array length is greater than zero, prompt a different input text holder question
  // and if the length equals 3 string values, join them and enter as a search query
  // remove the input and display the first gif in the ajax object


constructor() {
  super();
  this.state = {
    data: [],
    paginate: 0,
    searchGif: []
  };
}

pushToSearchGif(e) {
  e.preventDefault();
  console.log(this.storeInput.value);
}

componentDidMount() {
  this.fetchData();
}

fetchData() {
  const searchGif = this.props.query;
  fetch(`https://api.giphy.com/v1/gifs/search?q=${searchGif}&limit=${this.props.limit}&offset=${this.state.paginate}&api_key=${GIPHY_API_KEY}`)
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
          <form action="submit" className="Gif-Input-Container" onSubmit={(e) => {this.pushToSearchGif(e)}} >
            <input
                className="Gif-Search-Field Question Question-One"
                type="text" required placeholder="First Name"
                ref={(input => {this.storeInput = input})}

              />
          </form>
        </div>
      </div>
    );
  }
}

export default Body;

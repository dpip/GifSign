import React from 'react';

import Header from './components/Header';
import Body from './components/Body';
import Input from './components/Input';
import Footer from './components/Footer';
import FetchGiphy from './components/FetchGiphy';

import './css/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      < Header/>
      < Body/>
      < Input/>
      < Footer/>
      </div>
    );
  }
}

export default App;

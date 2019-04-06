import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';

class App extends Component {
  onSubmitSearch(term) {
    axios.get(`https://api.unsplash.com/search/photos`, {
      headers: {
        Authorization: `Client-ID 69f8a965f8ea12b3ccb3d856257a389343332bdb57564efd91c73985efce0058`
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSearch={this.onSubmitSearch} />
      </div>
    );
  }
}

export default App;

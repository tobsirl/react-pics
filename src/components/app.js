import React, { Component } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';

import SearchBar from './SearchBar';

dotenv.config();

class App extends Component {
  state = {
    images: []
  };

  async onSubmitSearch(term) {
    // const { URL, ACCESS_TOKEN } = process.env;
    const responce = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: { query: term },
      headers: {
        Authorization: `Client-ID 69f8a965f8ea12b3ccb3d856257a389343332bdb57564efd91c73985efce0058`
      }
    });

    console.log(responce.data.results);
    this.setState({ images: responce.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSearch={this.onSubmitSearch} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;

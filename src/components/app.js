import React, { Component } from 'react';
import dotenv from 'dotenv';

import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../api/unsplash';

dotenv.config();

class App extends Component {
  state = {
    images: []
  };

  onSubmitSearch = async term => {
    // const { URL, ACCESS_TOKEN } = process.env;
    const response = await unsplash.get(`/search/photos`, {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSearch={this.onSubmitSearch} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import SearchBar from './SearchBar';

class App extends Component {
  onSubmitSearch(term) {
    console.log(term);
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

import React from 'react';
import api from '../apis/youtube';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = {
    keyword: null,
    prevPageToken: null,
    nextPageToken: null,
    results: {}
  };

  render() {
    return (
      <div className="App">
        <SearchBar searchFn={this.youtubeSearch} />
      </div>
    );
  }

  youtubeSearch = (keyword) => {
    api.get('/search', {
      params: {
        q: keyword
      }
    })
      .then((response) => {
        this.setState({
          keyword,
          nextPageToken: response.data.nextPageToken,
          prevPageToken: response.data.prevPageToken,
          results: response.data.items
        });
      })
      .catch((error) => {
        console.log(error, 'error!');
        console.log(error.response, 'error response!');
      });
  }
}

export default App;

import React from 'react';
import api from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

class App extends React.Component {
  state = {
    keyword: null,
    prevPageToken: null,
    nextPageToken: null,
    videos: []
  };

  render() {
    return (
      <div className="App">
        <SearchBar searchFn={this.youtubeSearch} />
        <VideoList videos={this.state.videos} />
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
          videos: response.data.items
        });
      })
      .catch((error) => {
        console.log(error, 'error!');
        console.log(error.response, 'error response!');
      });
  }
}

export default App;

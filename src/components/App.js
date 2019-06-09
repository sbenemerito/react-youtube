import React from 'react';
import api from '../apis/youtube';
import './App.css';
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
      <div className="App m-5">
        <div className="row mb-5">
          <div className="col-md-12 text-center">
            <h1>YouTube-</h1>
            <p>a simple React app that accesses the YouTube API</p>
            <SearchBar searchFn={this.youtubeSearch} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-7">
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} />
          </div>
        </div>
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

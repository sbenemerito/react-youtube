import React from 'react';

class VideoListItem extends React.Component {
  render() {
    const { video } = this.props;

    return (
      <div className='video-list-item'>
        <img alt='video-thumbnail' src={video.snippet.thumbnails.default.url} />
        <p>{video.snippet.title}</p>
        <p>{video.snippet.description}</p>
      </div>
    );
  }
}

export default VideoListItem;
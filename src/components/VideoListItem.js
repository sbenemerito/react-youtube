import React from 'react';

class VideoListItem extends React.Component {
  render() {
    const { video } = this.props;

    return (
      <div className='video-list-item card mb-2' onClick={(e) => this.props.playFn(video)}>
        <div className="card-body d-flex justify-content-between">
          <img className='video-thumbnail' alt='video-thumbnail' src={video.snippet.thumbnails.default.url} />
          <div className='video-info'>
            <p className='video-info-title'>{video.snippet.title}</p>
            <span className='video-info-desc'>{video.snippet.description}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoListItem;
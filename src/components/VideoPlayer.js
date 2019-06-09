import React from 'react';

class VideoList extends React.Component {
  render() {
    const { video } = this.props;
    const videoSrc = video.id ? `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1` : '';

    return (
      <div className='video-player'>
        <iframe title={video.id} width='1000' height='600' src={videoSrc} frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
        <h4 className='mt-3'>{video.snippet ? video.snippet.title : ''}</h4>
        <p>{video.snippet ? video.snippet.channelTitle : ''}</p>
      </div>
    );
  }
}

export default VideoList;
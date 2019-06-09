import React from 'react';
import VideoListItem from './VideoListItem';

class VideoList extends React.Component {
  render() {
    const { videos } = this.props;

    return (
      <div className='video-list'>
        {
          videos.map((video, key) => {
            return <VideoListItem key={key} video={video} playFn={this.props.playFn} />
          })
        }
      </div>
    );
  }
}

export default VideoList;
import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect = {props.onVideoSelect}
        key={video.etag}
        video={video} />

    )
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;

// react an lists. If it knows the id of the lement it's trying to re-render it'll re-render that. Otherwise it''ll chuck all the elements away and update everything. Thus a record needs a key(a unique identifier).

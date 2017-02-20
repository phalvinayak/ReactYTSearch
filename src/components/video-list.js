import React from "react";
import VideoListItem from "./video-list-item";

export default props => {
    const videoItems = props.videos.map(video => <VideoListItem onVideoSelect={props.onVideoSelect} video={video} key={video.etag} />);
    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
}

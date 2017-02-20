import React from "react";

export default ( { video, onVideoSelect } ) => {
    return (
        <li className="list-group-item" onClick={() => onVideoSelect( video )}>
            <div className="media">
                <div className="media-left">
                    <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} className="media-object img-thumbnail"/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
}

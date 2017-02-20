import React from "react";

export default ({video}) => {
    console.log(video);
    if(!video){
        return <div>Loading...</div>
    }
    const url = `https://www.youtube.com/embed/${video.id.videoId}`;

    return(
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={url} frameBorder="0" className="embed-responsive-item"></iframe>
            </div>
            <div className="details">
                <h3>{video.snippet.title}</h3>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
}

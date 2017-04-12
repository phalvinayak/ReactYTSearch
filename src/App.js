import React, {Component} from "react";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search-bar";
import VideoDetail from "./components/video-detail";
import VideoList from "./components/video-list";

const API_KEY = "AIzaSyD3njbdB1KP6-Qg8LkBtni8bFRdMKTkfog";

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        }
        this.videoSearch = this.videoSearch.bind(this);
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term}, videos => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    }

    render(){
        return (
            <div className="container">
                <SearchBar videoSearch={this.videoSearch} />
                <div className="row">
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
                </div>
                <a href="https://github.com/phalvinayak/ReactNearBy" target="_blank">
                    <img style={{position: "absolute", top: 0, right: 0,border: 0}} src="/icons/ribbon.png" alt="Fork me on GitHub" />
                </a>
            </div>
        );
    }
}

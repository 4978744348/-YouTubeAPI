import React from "react";
import { Search } from "../components/search";
import { Sidebar } from "../components/sidebar";
import { VideoPlayer } from "../components/videoPlayer";


export class IndexComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           videoList: [],
           videoId: ""
        };
    }

    setVideoList = (value) => {
        this.setState({videoList: value})
    }

    setVideoId = (value) => {
        this.setState({videoId: value});
    }

    resetState = () => {
        this.setState({
            videoList: [],
            videoId: ""
        })
    }

    render() {
        return (
            <div className = "indexComponent-div-container">

                <div className = "indexComponent-block-search-videoplayer">
                    <Search
                        {...this.props}
                        setVideoList = {this.setVideoList}
                        setVideoId = {this.setVideoId}
                        resetState = {this.resetState}
                    />
                    <VideoPlayer
                        {...this.props}
                        videoId = {this.state.videoId}
                    />
                </div>

                <div className = "indexComponent-sidebar">
                    <Sidebar
                        {...this.props}
                        videoList = {this.state.videoList}
                        setVideoId = {this.setVideoId}
                        videoId = {this.state.videoId}
                    />
                </div>

            </div>
        );
    }
}
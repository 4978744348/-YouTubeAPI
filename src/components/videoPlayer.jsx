import React from "react";

export class VideoPlayer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "videoplayer-container">
                <iframe className = "video-iframe"
                    title = {this.props.videoId}
                    src = {`https://www.youtube.com/embed/${this.props.videoId}`}
                />
            </div>
        );
    }
}
import React from "react";

export class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    loadFirstVideoFromList(videoId, index) {
        if (this.props.videoId === "" && index === 0) {
            this.props.setVideoId(videoId);
        }
    }

    render() {
        return (
               <ul>
                   {this.props.videoList.map((item, i) => {
                        const {id, snippet = {} } = item;
                        const { title, thumbnails = {}} = snippet;
                        const { medium = {} } = thumbnails;
                        this.loadFirstVideoFromList(id.videoId, i);
                        return (
                            <li key={id.videoId} onClick = {() => this.props.setVideoId(id.videoId)}>
                                <p>
                                    <img width = {medium.width} height = {medium.height} src = {medium.url} alt = "" />
                                </p>
                                <h3>{ title }</h3>
                            </li>
                        );
                   })}
               </ul>
        );
    }
}

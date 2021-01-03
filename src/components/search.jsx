import React from "react";
import { Button } from "@material-ui/core";
import { getVideoListByWord, getVideoById } from "../api/yutubeAPI";
import { yutubeParserReq } from "../helper/parsers";

const ENTER_CODE = 13;

export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           value: "" 
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handlerQuery() {
        if (this.state.value.trim() !== "") {
            this.props.resetState();
            const value = yutubeParserReq(this.state.value);
            value === undefined ? getVideoListByWord(this.state.value, this.props) : getVideoById(value, this.props);
        }
    }

    componentDidMount(){
        document.addEventListener("keydown", this.handleKeyDown.bind(this), false);
    }
      componentWillUnmount(){
        document.removeEventListener("keydown", this.handleKeyDown, false);
    }

    handleKeyDown(event){
        if(event.keyCode === ENTER_CODE) {
            this.handlerQuery();
        }
    }
   
    handleChange(event) {
        this.setState({value: event.target.value});
    }
 
    render() {
        return (
            <div className = "search-div">
                <div className = "search-input">
                    <label>Enter query or insert link</label>
                    <input
                        type = "text"
                        value={this.state.value}
                        onChange = {this.handleChange}
                        placeholder = "Enter Search Keyword"
                    />
                </div>
                <Button
                    color="primary"
                    onClick={() => this.handlerQuery()}
                >
                    Search
                </Button>
            </div>
        );
    }
}

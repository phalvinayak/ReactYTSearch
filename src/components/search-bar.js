import React, {Component} from "react";

export default class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            term: "Facebook React"
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.props.videoSearch(this.state.term)
    }

    onInputChange(e){
        this.setState({term: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        this.props.videoSearch(this.state.term);
    }

    render(){
        return(
            <div className="row">
                <div className="search-bar col-md-12">
                    <h1>React YouTube Search API</h1>
                    <form className="input-group" onSubmit={this.onSubmit}>
                        <input type="text" className="form-control" placeholder="Search for..." onChange={this.onInputChange} value={this.state.term} />
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="submit">Search</button>
                        </span>
                    </form>
                </div>
            </div>
        );
    }
}

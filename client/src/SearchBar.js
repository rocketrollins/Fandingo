import React, { Component } from 'react';
import './App.css'

class SearchBar extends Component {
    render() {
        return (
            <div className="search">
                <input type="text" value={this.props.searchTitle} placeholder="Search by Title of Movie... " onChange={this.props.searchByTitle} />
            </div>
        );
    }
}

export default SearchBar;



import React, {Component} from 'react';
import './App.css';
import MovieDetails from './MovieDetails';

class Movie extends Component {
    constructor() {
        super()
        this.state = {
            isHidden: true
        }
    }

    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
    render() {
        return (
            <div className="movie-block">
                <button onClick={this.toggleHidden.bind(this)}>{this.props.movie.Title}</button>
                {!this.state.isHidden && <MovieDetails movie={this.props.movie}/>}
            </div>
        )
    }
}

export default Movie;
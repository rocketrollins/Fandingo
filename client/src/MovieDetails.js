import React, {Component} from 'react';
import './App.css';

class MovieDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: ''
        }
        fetch('/getDetailsById/' + this.props.movie.imdbID)
            .then(res => res.json())
            .then(data => {
                const movieData = JSON.parse(data);
                this.setState({
                    movie: movieData,
                });
            })
    }

    render() {
        const movie = this.state.movie;
        return (
            <div className="movie-details">
                <div className="movie-image">
                    <img src={this.state.movie.Poster} alt=""></img>
                    <div className="movie-details-item"><label>Title: </label>{movie.Title}</div>
                    <div className="movie-details-item"><label>Rated: </label>{movie.Rated}</div>
                    <div className="movie-details-item"><label>imdbRating: </label>{movie.imdbRating}</div>   
                    <div className="movie-details-item"><label>imdbVotes: </label>{movie.imdbVotes}</div>   
                </div>
                <div className="movie-details-block">
                    <div className="movie-details-item"><label>Year: </label>{movie.Year}</div>   
                    <div className="movie-details-item"><label>Actors: </label> {movie.Actors}</div>
                    <div className="movie-details-item"><label>Awards: </label>{movie.Awards}</div>
                    <div className="movie-details-item"><label>Box Office: </label>{movie.BoxOffice}</div>
                    <div className="movie-details-item"><label>Country: </label>{movie.Country}</div>
                    <div className="movie-details-item"><label>DVD: </label>{movie.DVD}</div>
                    <div className="movie-details-item"><label>Director: </label>{movie.Director}</div>
                    <div className="movie-details-item"><label>Production: </label>{movie.Production}</div>
                    <div className="movie-details-item"><label>Genre: </label>{movie.Genre}</div>
                    <div className="movie-details-item"><label>Language: </label>{movie.Language}</div>
                    <div className="movie-details-item"><label>Plot: </label>{movie.Plot}</div>
                </div>
            </div>
        );
    }
}

export default MovieDetails;
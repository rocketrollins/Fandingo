import React, {Component} from 'react';
import './App.css';
import SearchBar from './SearchBar';
import Movie from './Movie';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTitle: '',
      movies: []
    };
    this.searchByTitle = this.searchByTitle.bind(this);
  }


  searchByTitle (event) {
    this.setState({ 
      searchTitle: event.target.value
    })
    
    fetch('/searchByTitle/' + event.target.value)
        .then(res => res.json())
        .then(data => {
          const movieData = JSON.parse(data);
          this.setState({
            movies: movieData.Search !== undefined ? movieData.Search : [],
            totalResults: movieData.totalResults,
            response: movieData.Response
          })
        })
}
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Fandingo</h1>
        </header>
        <div className="search">
          <SearchBar searchByTitle={this.searchByTitle} searchTitle={this.state.searchTitle}/>
        </div>
        <div className="Movie-list">
            {this.state.movies.map((movie, index) => 
              <Movie key={index} movie={movie}/>
            )}
        </div>
      </div>
    );
  }
}

export default App;

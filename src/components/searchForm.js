import React, { Component } from 'react';
import Movies from './movie';

const API_KEY = '4044f76e'

class SearchForm extends Component {
  state = {
    inputMovie: '',
    movies: {}
  }

  _handleChange = (e) => {
    this.setState({ inputMovie:e.target.value })
  }

  _handleSubmit = (e) => {
    e.preventDefault()
    const { inputMovie } = this.state
    fetch('http://www.omdbapi.com/?apikey='+API_KEY+'&s='+inputMovie)
      .then(res => res.json())
      .then(data => {
        const movies = data
        this.setState({movies: movies})
      })
  }

  render() { 
    
    return (
      <div>
        <form onSubmit={this._handleSubmit} className='mb-3'>
          <div className="container input-group">
            <input type="text" className="form-control" placeholder='Movie to search...' onChange={this._handleChange}/>
            <button className="btn btn-info input-group-append">
              Search
            </button>
          </div>
        </form>  
        <Movies movieList={ this.state.movies.Search } />
      </div>
    );
  }
}
 
export default SearchForm;
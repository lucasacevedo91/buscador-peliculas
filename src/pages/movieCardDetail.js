import React, { Component } from 'react';
import ButtonBackHome from '../components/buttonBackHome';

class MovieCard extends Component {
  state = {

  }

  goBack = () => {
    window.history.back()
  }

  render() { 
    const movie = this.props.pelicula
    console.log('render card')
    console.log(movie)
    return (
      <div className="container w-75">
        <div className="card">
          <div className="card-header text-center h5">
            {movie.Title}
          </div>
          <div className="card-body d-flex">
            <img src={movie.Poster} alt={movie.Title} style={{maxHeight:'250px'}}/>
            <div className='w-75' style={{marginLeft: '10px'}}>
              <p><strong>Actors: </strong> {movie.Actors}</p>
              <p><strong>Plot: </strong> {movie.Plot}</p>
            </div>
          </div>
        </div>
        <ButtonBackHome />
      </div>
    );
  }
}
 
export default MovieCard;
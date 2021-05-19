import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Movie extends Component {
  render() {
    // const { movie } = this.props
    const { imdbID, Poster, Title, Year } = this.props.movie

    return (
      <Link to={'/detail/'+imdbID} className='card mb-4'>
        <div className="card-horizontal">
          <img 
            alt={ Title }
            src={ Poster }
            style={{maxHeight: '200px'}}
          />  
          <div className='card-header w-100'>
            <h5>{ Title }</h5>
          </div>
        </div>
        <div className="card-footer p-0 m-0">
          <p className='m-1 p-0'>{ Year }</p>
        </div>
      </Link>
    );
  }
}

export default Movie;
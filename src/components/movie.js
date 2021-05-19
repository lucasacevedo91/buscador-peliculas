import React from 'react';
import Movie from './movieContent';

const Movies = (props) => {
  const { movieList } = props
  if (movieList){ 
    return (
      <div className='container'>
        {
          Object.keys(movieList).map((m) => {
            return(
              <Movie key={ movieList[m].imdbID } movie={ movieList[m] } /> 
            )
          })
        }
      </div>
    );
  }
  return null
}
 
export default Movies;
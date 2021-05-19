import React, { Component } from 'react';
import MovieCard from './movieCardDetail';
import PropTypes from 'prop-types'

const API_KEY = '4044f76e'

class Detail extends Component {
  state = {
    movie : {}
  }

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  }

  fetchMovie = () => {
    console.log('fetch')
    console.log(this.props)
    const { id } = this.props.match.params
    fetch('http://www.omdbapi.com/?apikey='+API_KEY+'&i='+ id )
      .then(res => res.json())
      .then(res => {
        const movie = res
        this.setState({
          movie: movie
        })
      })
  }

  componentDidMount(){
    this.fetchMovie()
  }

  render() { 
    console.log('render')
    return (
      <div>
        <h3 className='title text-center p-2'>Pagina de detalle</h3>
        <MovieCard pelicula={this.state.movie} />
      </div>
    );
  }
}
 
export default Detail;
import React, { Component } from 'react';
import SearchForm from '../components/searchForm';
import Title from '../components/title';

class Home extends Component {
  state = {}
  render() { 
    return (
      <div>
        <Title>Search Movies</Title>
        <div className="SearchForm-wrapper">
          <SearchForm />
        </div>
      </div>
    );
  }
}
 
export default Home;
import React from 'react';
import ButtonBackHome from '../components/buttonBackHome';

const NotFound = () => {
  return (
    <div>
      <p className='display-1'>404!</p>
      <h3>No existe la pagina</h3>
      <ButtonBackHome />
    </div>
  );
}
 
export default NotFound;
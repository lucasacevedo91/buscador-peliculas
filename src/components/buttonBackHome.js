import React from 'react';
import { Link } from 'react-router-dom';

const ButtonBackHome = () => {
  return (
    <div className='mx-auto text-center mt-3'>
      <Link className='btn btn-danger w-25' to='/'>
        Volver
      </Link>
    </div>
  );
}
 
export default ButtonBackHome;
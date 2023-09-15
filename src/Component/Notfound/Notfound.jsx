import React from 'react';
import img from '../Assets/err.jpeg';

export default function Notfound() {
    
  return (
    <div className='text-center mt-4'>
    <h2 className='text-danger'>Not Found </h2>
    <img src={img} className='w-50'></img>

    </div>
  )
}
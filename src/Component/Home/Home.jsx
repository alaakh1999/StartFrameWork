import React from 'react'
import imgg from '../Assets/avataaars.svg'

export default function Home() {
  return (
    <>
     <div className='home d-flex justify-content-center align-items-center text-white mb-5'>
      <div className='text-center'>
        <img src={imgg} alt='logo' className='mb-4 w-75'/>
        <div className='text-center'>
        <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>start framework</h2>
      </div>
      <div className='d-flex justify-content-center align-items-center mb-4'>
        <div className="line me-3"></div>
        <i className='fa-solid fa-star'></i>
        <div className="line ms-3"></div>
      </div>
      <div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>

      </div>

     </div>
    </>
  )
}

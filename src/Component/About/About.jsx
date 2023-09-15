import React from 'react'

export default function About() {
  return (
    <div className=' about'>
      <div className='mt-5  d-flex justify-content-center align-items-center'>

        <div className="container  text-white mt-5">

          <div className='text-center pt-4 ' style={{ color: 'white' }}>
            <h2 className='text-uppercase md-3 fs-1 fw-bolder'>about component</h2>
          </div>

          <div className='d-flex justify-content-center align-items-center mb-4'>
            <div className="line me-3"></div>
            <i className='fa-solid fa-star'></i>
            <div className="line ms-3"></div>
          </div>



        </div>

      </div>
      <div className="container mt-5 text-white ">
      <div className="row px-5">
        <div className="col-lg-6 col-sm-12 ps-mb-5">
          <p className='fs-5'>
            Freelancer is a free bootstrap theme created by Route.
            The download includes the complete source files including HTML,
            CSS, and JavaScript as well as optional SASS stylesheets for easy customization
          </p>
        </div>
        <div className="col-lg-6 col-sm-12 pe-5">
          <p className='fs-5'>
            Freelancer is a free bootstrap theme created by Route.
            The download includes the complete source files including HTML,
            CSS, and JavaScript as well as optional SASS stylesheets for easy customization
          </p>
        </div>
      </div>
      </div>
    </div>
  )
}

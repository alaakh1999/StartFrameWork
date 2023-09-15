import React from 'react'

export default function Footer() {
  return (
    <>
    <div className='footer'>
        <div className='card-group border-none m-4'>
            <div className='card border-none'>
                <div className="card-body text-center border-none text-white">
                    <h2>LOCATION</h2>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>

                </div>
            </div>
            <div className="card text-white">
                <div className="card-body" >
                    <h3>AROUND THE WEB</h3>
                    <div className="icons">
                        <i className='fa-brands fa-facebook mx-1 icon'></i>
                        <i className='fa-brands fa-twitter mx-1 icon'></i>
                        <i className='fa-brands fa-linkedin-in mx-1 icon'></i>
                        <i className='fa-solid fa-globe mx-1 icon'></i>
                    </div>
                </div>

            </div>
            <div className="card text-white">
                <div className="card-body">
                    <h3>ABOUT FREELANCER</h3>
                    <p>Freelance is a free to use, licensed Bootstrap theme</p>
                    <p>created by Route</p>
                </div>
            </div>

        </div>

    </div>
    <div className="endfooter">
        <p className='text-center pt-3 text-white'>Copyright © Your Website 2021</p>
    </div>
    </>
  )
}

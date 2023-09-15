import React , { useState } from 'react'
import img from '../Assets/poert1.png'
import imge from '../Assets/port2.png'
import image from '../Assets/port3.png'
 
export default function Portfolio() {

 let lightBoxContainer =document.getElementById('lightBoxContainer');
 let lightBox =document.getElementById('lightBox');
 
  
  let[model,setModel]=useState(false)
  let[imageSrc, setImageSrc] = useState('');

  

  const changeImageSrc = (image) => {
    console.log(image);
    setImageSrc(image);
  }

  function openModel(img){
    setModel(true)
    changeImageSrc(img)
  }
  
  function close(){
    setModel(false)
  }

  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("test")) {
        close();
    }
});

  return (
    <div className='portfolio mb-5'>
      <div className='pt-5 text-center' style={{ color: '#2C3E50' }}>
        <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>portfolio component</h2>
      </div>
      <div className='d-flex justify-content-center align-items-center mb-4'>
        <div className="line me-3"></div>
        <i className='fa-solid fa-star'></i>
        <div className="line ms-3"></div>
      </div>
      <div className="container">
        <div className="row g-5">

          <div className="col-lg-4 col-sm-12 col-md-6">
            <div className="work-image  position-relative rounded-3"  onClick={()=>openModel(img)}>
              <img src={img} className="img-fluid rounded-3" alt="book"/>
              <div className="layout-work rounded-3">
                <div className="lay-port text-center">
                  <i className='text-white fa-solid fa-plus fa-6x'></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-12 col-md-6">
            <div className="work-image  position-relative rounded-3"  onClick={()=>openModel(imge)} >
              <img src={imge} className="img-fluid rounded-3" alt="book" />
              <div className="layout-work rounded-3">
                <div className="lay-port text-center">
                  <i className='text-white fa-solid fa-plus fa-6x'></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col-md-6">
            <div className="work-image  position-relative rounded-3"  onClick={()=>openModel(image)}>
              <img src={image} className="img-fluid rounded-3" alt="book" />
              <div className="layout-work rounded-3">
                <div className="lay-port text-center">
                  <i className='text-white fa-solid fa-plus fa-6x'></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col-md-6">
            <div className="work-image  position-relative rounded-3"  onClick={()=>openModel(img)}>
              <img src={img} className="img-fluid rounded-3" alt="book" />
              <div className="layout-work rounded-3">
                <div className="lay-port text-center">
                  <i className='text-white fa-solid fa-plus fa-6x'></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col-md-6">
            <div className="work-image  position-relative rounded-3"  onClick={()=>openModel(imge)}>
              <img src={imge} className="img-fluid rounded-3" alt="book" />
              <div className="layout-work rounded-3">
                <div className="lay-port text-center">
                  <i className='text-white fa-solid fa-plus fa-6x'></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col-md-6">
            <div className="work-image  position-relative rounded-3"  onClick={()=>openModel(image)}>
              <img src={image} className="img-fluid rounded-3" alt="book" />
              <div className="layout-work rounded-3">
                <div className="lay-port text-center">
                  <i className='text-white fa-solid fa-plus fa-6x'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="lightBoxContainer" className="d-none test">
        <div id="lightBox">
          
          <i className="fa-regular fa-circle-xmark" id="clossBtn"></i>
        </div>
      </div>
      
    </div>
  )
}

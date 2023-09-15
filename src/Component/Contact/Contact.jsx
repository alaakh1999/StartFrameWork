
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

export default function Contact() {

  function submitForm(values) {
    console.log(values);
  }

  const validationSchema = Yup.object({
    name: Yup.string().min(3, 'min length is 3 char').max(7, 'max is 7').required('name is required'),
    email: Yup.string().email('email not vaild').required('emil is required'),
    age :Yup.string().matches(/^([1-7][0-9]|80)$/).required('Age is Required [10:80]'),
    password: Yup.string().matches(/^[A-Z][a-z0-9]{5}$/, 'Password not valid').required('password is required'),

  })

  let formik = useFormik({
    initialValues: {
      name: '',
      age : '',
      email: '',
      password: ''

    },

    validationSchema,
    onSubmit: submitForm,

  })

  return (
    <div className='contact mb-5'>
      <div className='container py-4'>
      <div className='pt-5 text-center' style={{ color: '#2C3E50' }}>
        <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>contact section</h2>
      </div>
      <div className='d-flex justify-content-center align-items-center mb-4'>
        <div className="line me-3"></div>
        <i className='fa-solid fa-star'></i>
        <div className="line ms-3"></div>
      </div>
        <form className='w-50 mx-auto' onSubmit={formik.handleSubmit}>
          
          <input type='text' className='form-control  border-0 border-bottom mb-5' name='name' value={formik.values.name}
            onChange={formik.handleChange} placeholder='userName' onBlur={formik.handleBlur}></input>

          {formik.errors.name && formik.touched.name ? <p className='alert alert-danger'>{formik.errors.name}</p> : ''}

          <input type='text' className='form-control mb-5  border-0 border-bottom' name='age' value={formik.values.age}
            onChange={formik.handleChange} placeholder='userAge' onBlur={formik.handleBlur}></input>

          {formik.errors.age && formik.touched.age ? <p className='alert alert-danger'>{formik.errors.age}</p> : ''}



          <input type='email' className='form-control mb-5  border-0 border-bottom' name='email' value={formik.values.email}
            onChange={formik.handleChange} placeholder='userEmail' onBlur={formik.handleBlur}></input>

          {formik.errors.email && formik.touched.email ? <p className='alert alert-danger'>{formik.errors.email}</p> : ''}


          <input type='password' placeholder='userPassword' className='form-control mb-5 border-0 border-bottom' name='password' value={formik.values.password}
            onChange={formik.handleChange} onBlur={formik.handleBlur}></input>

          {formik.errors.password && formik.touched.password ? <p className='alert alert-danger'>{formik.errors.password}</p> : ''}


          <button type='submit'
            className='btn text-white me-auto d-block mt-3' style={{ backgroundColor: '#1abc9c' }}>Send Message
          </button>
        </form>

      </div>
    </div>
  )
}

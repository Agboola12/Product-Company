import React from 'react'
import NavBar from './NavBar'
import style from './Styles.module.css'
import one from '../assets/1B-0.png'
import three from '../assets/3B-0.png'
import two from '../assets/booster-0.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <NavBar/>

      <header id={style.header}> 

      </header>
      
      {/* <div className='container p-5 mb-5' id={style.service}> */}
      <div className='container mt-5 mx -auto'>
        <p className='fs-1 fw-bold'> PRODUCTS</p>
      <div className='row text-center mt-4 mb-5' id='home'>
                    <div className='col-lg-3 mx-auto shadow bg-white rounded-sm  '>
                        <div className=''>
                            <img src={one} className='w-100' />
                            <p className='text-primary fw-bold mt-2'>Dell</p>
                            <p className='fw-bold'>$45.00</p>
                            <Link to="/product-detail" className="btn btn-main-1 w-100 text-medium text-white fw-bold fs-6 rounded-0 py-3 px-4" style={{ backgroundColor: '#1C7C68' }}>View Button</Link>
                        </div>
                    </div>
                    <div className='col-lg-3 mx-auto shadow bg-white rounded-sm  '>
                        <div className=''>
                            <img src={two} className='w-100' />
                            <p className='text-primary fw-bold mt-2'>Dell</p>
                            <p className='fw-bold'>$45.00</p>
                            <button className="btn btn-main-1 w-100 text-medium text-white fw-bold fs-6 rounded-0 py-3 px-4 mb-4 rounded-lg" style={{ backgroundColor: '#1C7C68' }}>View Button</button>

                        </div>
                    </div>
                    <div className='col-lg-3 mx-auto shadow bg-white rounded-sm  '>
                        <div className=''>
                            <img src={three} className='w-100' />
                            <p className='text-primary fw-bold mt-2'>Dell</p>
                            <p className='fw-bold'>$45.00</p>
                            <button className="btn btn-main-1 w-100 text-medium text-white fw-bold fs-6 rounded-0 py-3 px-4 mb-4 rounded-lg" style={{ backgroundColor: '#1C7C68' }}>View Button</button>
                        </div>
                    </div>
                    </div>
      {/* </div> */}

      </div>

      <div className='fixed-bottom d-flex mb-5'>
        <button
      <i class="fa fab-whatsapp text-left text-primary" aria-hidden="true"></i>
       <button className='btn btn-success'>
           <i className='fa fa-phone text-right text-white'></i>
        </button>
      </div>
      <div className='bg-danger text-center mx-auto'>
          <p>DO NOT PLACE ORDER FOR THIS PRODUCT IF YOU ARE NOT READY </p>
      </div>
    </div>
  )
}

export default Home
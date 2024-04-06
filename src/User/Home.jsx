import React from 'react'
import NavBar from './NavBar'
import style from './Styles.module.css'
import one from '../assets/1B-0.png'
import three from '../assets/3B-0.png'
import two from '../assets/booster-0.png'
import { Link } from 'react-router-dom'
import FooterBar from './Footer'


const Home = () => {

  const handleMobileClick = (mobile) => {
    window.location.href = `tel:${mobile}`;
};

const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
};
  return (
    <div>
      <NavBar />

      <header id={style.header}>

      </header>

      {/* <div className='container p-5 mb-5' id={style.service}> */}
      <div className='container mt-5 mx -auto'>
        <p className='fs-1 fw-bold'> PRODUCTS</p>
        <div className='row text-center mt-4 mb-5' id='home'>

          <div className='col-lg-3 mx-auto shadow bg-white rounded-sm  '>
            <img src={one} className='w-100' />
            <p className='text-primary fw-bold mt-2'>Dell</p>
            <p className='fw-bold'>$45.00</p>
            <Link to="/product-detail" className="btn btn-main-1 w-100 text-medium text-white fw-bold fs-6 rounded-0 py-3 px-4" style={{ backgroundColor: '#1C7C68' }}>View Button</Link>
          </div>

          <div className='col-lg-3 mx-auto shadow bg-white rounded-sm  '>
            <img src={two} className='w-100' />
            <p className='text-primary fw-bold mt-2'>Dell</p>
            <p className='fw-bold'>$45.00</p>
            <button className="btn btn-main-1 w-100 text-medium text-white fw-bold fs-6 rounded-0 py-3 px-4 mb-4 rounded-lg" style={{ backgroundColor: '#1C7C68' }}>View Button</button>
          </div>

          <div className='col-lg-3 mx-auto shadow bg-white rounded-sm'>
            <img src={three} className='w-100' />
            <p className='text-primary fw-bold mt-2'>Dell</p>
            <p className='fw-bold'>$45.00</p>
            <button className="btn btn-main-1 w-100 text-medium text-white fw-bold fs-6 rounded-0 py-3 px-4 mb-4 rounded-lg" style={{ backgroundColor: '#1C7C68' }}>View Button</button>
          </div>

        </div>
      </div>

      <div className=' fixed-bottom d-flex  mb-5'>
        <button className='btn btn-success mr-auto'>
          <i className='fab fa-whatsapp text-white'></i>
        </button>
        <button className='btn btn-success ml-auto'>
          <i className='fa fa-phone text-white'></i>
        </button>
      </div>

      <div className='bg-danger text-center mx-auto'>
        <p>DO NOT PLACE ORDER FOR THIS PRODUCT IF YOU ARE NOT READY </p>
      </div>

      <FooterBar/>

      
      <div className='container-fluid mx-auto text-center p-5' id={style.footer}>
            <div className='row '>
                <div className='col-lg-3'>
                    <p>
                <h6 className="text-medium text-uppercase text-white">Available</h6>
                        - 24/7 active
                    </p>
                </div>
                <div className='col-lg-3'>
                    <p>
                <h6 className="text-medium text-uppercase text-white">Find Us</h6>
                        103 North Loundon Street, <br />
                        Winchider, VA
                    </p>
                </div>
                <div className='col-lg-3'>
                <h6 className="text-medium text-uppercase text-white">Email Us</h6>
                    <ul className="list-unstyled">
                        <li className='text-white text-decoration-none' onClick={() => handleEmailClick('amosunelijah01@gmail.com')}>amosunelijah01@gmail.com</li>
                    </ul>
                </div>
                <div className='col-lg-3'>
                <h6 className="text-medium text-uppercase text-white">Call Us </h6>
                    <ul className="list-unstyled">
                        <li className='text-white text-decoration-none' onClick={() => handleMobileClick('+2348077628697')}>+2348077628697 </li>
                <h6 className="text-medium text-uppercase text-white mt-4">Whatsapp</h6>
                        <li className='text-white text-decoration-none' onClick={() => handleMobileClick('+2348077628697')}>+2348077628697</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-lg-12">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>© BlackMan. All Rights Reserved</div>

                        <ul className="list-unstyled d-flex mb-0" style={{ gap: "10px" }}>
                            <li><Link to="https://www.facebook.com/elijah.amosun.79?mibextid=ibOpuV" className="text-white"><i className="fab fa-facebook"></i></Link></li>
                            <li><Link to="https://www.instagram.com/amosunelijah01?igsh=MTk4eDl6Zjk5OXlmMQ%3D%3D&utm_source=qr" className="text-white"><i className="fab fa-instagram"></i></Link></li>
                            <li><Link to="https://wa.link/sea1s7" className="text-white"><i className="fab fa-whatsapp"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Home
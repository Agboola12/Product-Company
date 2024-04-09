import React from 'react'
import NavBar from './NavBar'
import FooterBar from './Footer'
import one from '../assets/1B-0.png'
import { Link } from 'react-router-dom'
import style from './Styles.module.css'



const ProductDetails = () => {
    return (
        <div>
            <NavBar/>
            <header className=' text-white' id={style.head}>
                <div className='container'>
                <div className='row mx-auto '>
                    <div className='col-lg-4 mx-auto '>
                        <p className='fw-bold mt-5' style={{fontSize: '5em'}}> WANT BIGGER <p style={{color: '#621A3F'}}> SIZE?</p>  </p>
                        <p className='fw-bold' style={{fontSize: '3em'}}>Sperm Booster <br/> gives fast and <br/> long-term effect</p>
                    </div>
                    <div className='col-lg-4  mx-auto p-1 text-center '>
                        <img src={one} className='w-100 ' />
                        <p className='fw-bold fs-1 '>#25,000</p>
                        <Link to="https://wa.link/sea1s7" className='btn btn-main-1 w-50 text-medium text-white fw-bold fs-4 rounded-0 py-3 px-4 mb-4 rounded-lg' style={{ backgroundColor: '#621A3F' }}>Order Now</Link>
                    </div>
                </div>

                <div>
                    <p className=''>GIVE THEM WHAT THEY WANT WITH THE HELP OF SPERM BOOSTER</p>
                </div>

                </div>
            </header>

            <FooterBar />
        </div>
    )
}

export default ProductDetails
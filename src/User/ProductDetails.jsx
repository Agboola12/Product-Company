import React from 'react'
import NavBar from './NavBar'
import FooterBar from './Footer'
import one from '../assets/1B-0.png'
import { Link } from 'react-router-dom'
import style from './Styles.module.css'



const ProductDetails = () => {
    return (
        <div>
            <NavBar />
            <header className=' text-white' id={style.head}>
                <div className='container'>
                    <div className='row mx-auto '>
                        <div className='col-lg-4 mx-auto '>
                            <p className='fw-bold mt-5' style={{ fontSize: '5em' }}> WANT BIGGER <p style={{ color: '#621A3F' }}> SIZE?</p>  </p>
                            <p className='fw-bold' style={{ fontSize: '3em' }}>Sperm Booster <br /> gives fast and <br /> long-term effect</p>
                        </div>
                        <div className='col-lg-4  mx-auto p-1 text-center '>
                            <img src={one} className='w-100 ' />
                            <p className='fw-bold fs-1 '>#25,000</p>
                            <Link to="https://wa.link/sea1s7" className='btn btn-main-1 w-50 text-medium text-white fw-bold fs-4 rounded-0 py-3 px-4 mb-4 rounded-lg' style={{ backgroundColor: '#621A3F' }}>Order Now</Link>
                        </div>
                    </div>

                    <div>
                        <p className='fw-bold h1 text-center'>GIVE THEM WHAT THEY WANT <br/> WITH THE HELP OF SPERM BOOSTER</p>
                        <div className='row'>
                            <div className='col-md-6'>
                                <img src={one} className='w-100 ' />
                            </div>
                            <div className='col-md-6 text-center mx-auto'>
                                <p>Made from nature’s most effective Maca extract, Fenugreek extract, Tongkat Ali and Horny Goat Weed and Siberian ginseng, Longjack XXXL guarantees increased endurance, erection,
                                    better performance and control than ever before! Longjack increases the volume of blood that fills your penis and
                                    expands its size appearing larger with every erection.
                                </p>
                                <p>
                                    The more you take Longjack XXXL, the more you’ll see that it works with your hormones which stabilize successful erectile
                                    function and maximize blood flow to your penis.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </header>

            <FooterBar />
        </div>
    )
}

export default ProductDetails
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

                    <div className='mt-5'>
                        <p className='fw-bold h1 text-center'>GIVE THEM WHAT THEY WANT <br /> WITH THE HELP OF SPERM BOOSTER</p>
                        <div className='row mx-auto text-center'>
                            <div className='col-md-6 mx-auto'>
                                <img src={one} className='w-100 ' />
                            </div>
                            <div className='col-md-6 text-center fs-5 mx-auto' style={{ marginTop: '7em' }}>
                                <p>Made from nature’s most effective Maca extract, Fenugreek extract, Tongkat Ali and Horny Goat Weed and Siberian ginseng, Sperm Booster guarantees increased endurance, erection,
                                    better performance and control than ever before! Sperm Booster increases the volume of blood that fills your penis and
                                    expands its size appearing larger with every erection.
                                </p>
                                <p>
                                    The more you take Sperm Booster, the more you’ll see that it works with your hormones which stabilize successful erectile
                                    function and maximize blood flow to your penis.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-5'> 
                        <p className='fw-bold fs-1 text-center'>FOLLOW THESE EASY RULES</p>
                        <div className='row'>
                            <div className='col-lg-4 bg-white p-5 rounded'>
                                    <p className='fw-bold' style={{ color: '#621A3F' }} >TAKE 1 CAPSULE PER DAY </p>
                            </div>
                        </div>
                    </div>


                </div>
            </header>

            <div className='container mx-auto text-center'>
                <p className='fw-bold fs-1 mt-5'> YOU SHOULD TRY IT! </p>
                <div className='row' style={{marginTop:'5em'}}>
                    <div className='col-lg-4'>
                        <p className='fw-bold' style={{ fontSize: '2em' }}>YOU WILL BE SURPRISED TO KNOW ABOUT THE HIDDEN POWER INSIDE YOU!</p>
                    </div>
                    <div className='col-lg-4'>
                        <img src={one} className='w-100 ' />
                    </div>
                    <div className='col-lg-4 mt-3'>
                        <p>Sex anytime and anywhere: </p>
                        <p> On the table, in the car, </p>
                        <p className='fw-bold'>in the cinema hall, </p>
                        <p className='fw-bold' style={{ color: '#621A3F' }}>OR IN BED AT HOME. </p>
                    </div>
                </div>
            </div>

            <FooterBar />
        </div>
    )
}

export default ProductDetails
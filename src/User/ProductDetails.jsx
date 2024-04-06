import React from 'react'
import NavBar from './NavBar'
import FooterBar from './Footer'
import one from '../assets/1B-0.png'
import { Link } from 'react-router-dom'


const ProductDetails = () => {
    return (
        <div>
            <NavBar/>
            <div className='container mt-5 mb-5'>
                <div className='row'>
                    <div className='col-lg-5'>
                        <img src={one} className='w-100' />
                    </div>
                    <div className='col-lg-6'>
                        <p className='fs-3 fw-bold'> Product Details</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, animi? Quibusdam dicta
                            saepe dolore qui enim, eaque temporibus necessitatibus eveniet suscipit, corporis asperiores natus voluptatem
                            Dignissimos, sint placeat!
                        </p>
                        <Link to="https://wa.link/sea1s7" className='btn btn-main-1 w-50 text-medium text-white fw-bold fs-6 rounded-0 py-3 px-4 mb-4 rounded-lg' style={{ backgroundColor: '#1C7C68' }}>Get Product</Link>
                    </div>
                </div>
            </div>

            <FooterBar />
        </div>
    )
}

export default ProductDetails
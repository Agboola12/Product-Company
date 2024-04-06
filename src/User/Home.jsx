import React from 'react'
import NavBar from './NavBar'
import style from './Styles.module.css'
import one from '../assets/1B-0.png'
import three from '../assets/3B-0.png'
import two from '../assets/booster-0.png'
import team from '../assets/aa.jpg'
import { Link } from 'react-router-dom'
import FooterBar from './Footer'



const Home = () => {
  const handleMobileClick = (mobile) => {
    window.location.href = `tel:${mobile}`;
};
  
  return (
    <div>
      <NavBar />

      <header id={style.header}>

      </header>

      <div className='  mb-5 jumbotron mx-auto'>
                <div className='row mx-auto '>
                    <div className='col-lg-3 mx-auto'>
                        <img src={team} className='w-50 ' style={{borderRadius: '50px'}} />
                    </div>
                    <div className='col-lg-6 mr-5'>
                        <p className='fs-3 fw-bold'> What we do</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, animi? Quibusdam dicta
                            saepe dolore qui enim, eaque temporibus necessitatibus eveniet suscipit, corporis asperiores natus voluptatem
                            Dignissimos, sint placeat!
                        </p>
                    </div>
                </div>
            </div>

      {/* <div className='container p-5 mb-5' id={style.service}> */}
      <div className='container mt-5 mx -auto'>
        <p className='fs-1 fw-bold'> PRODUCTS</p>
        <div className='row text-center mt-4 mb-5' id='home'>

          <div className='col-lg-3 mx-auto shadow bg-white rounded-sm  '>
            <img src={one} className='w-100' />
            <p className='text-primary fw-bold mt-2'>Dell</p>
            <p className='fw-bold'>$45.00</p>
            <Link to="/detail" className="btn btn-main-1 w-100 text-medium text-white fw-bold fs-6 rounded-0 py-3 px-4" style={{ backgroundColor: '#1C7C68' }}>View Button</Link>
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
        <button className='btn btn-success fs-4 mr-auto '>
          {/* <i className='fab fa-whatsapp text-white '></i> */}
          <Link to="https://wa.link/7rbwz0" className="text-white"><i className="fab fa-whatsapp"></i></Link>

        </button>
        <button className='btn btn-success fs-4 ml-auto '>
          {/* <i className='fa fa-phone text-white '></i> */}
          <i className='fa fa-phone text-white text-decoration-none' onClick={() => handleMobileClick('+2348077628697')}></i> 
        </button>
      </div>

      <div className='text-center mx-auto p-5 mb-4' id={style.team}>
                <p className='fw-bold fs-3'>Our Team</p>
                <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illum veritatis obcaecati libero laudantium ea, et voluptatibus unde? La
                    boriosam rem velit, at mollitia neque quod culpa animi consequuntur amet maiores? Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Corporis, labore asperiores! A molestiae magni quidem eos error imp
                </p>
                <div className='row text-center mx-auto'>
                    <div className='col-lg-4'>
                        <img src={team} alt='jjgj' className='w-25 ' id={style.profile} /><br/>
                        <small className='fw-bold'>John Doe</small><br/>
                        <small>Team Member</small>
                    </div>
                    <div className='col-lg-4'>
                        <img src={team} alt='jjgj' className='w-25 ' id={style.profile} /><br/>
                        <small className='fw-bold'>John Doe</small><br/>
                        <small>Team Member</small>
                    </div>
                    <div className='col-lg-4'>
                        <img src={team} alt='jjgj' className='w-25  ' id={style.profile} /><br/>
                        <small className='fw-bold'>John Doe</small><br/>
                        <small>Team Member</small>
                    </div>
                </div>
            </div>

      <div className='bg-danger text-center mx-auto p-2 mx-auto text-white mb-4 fw-bold'>
        <p>DO NOT PLACE ORDER FOR THIS PRODUCT IF YOU ARE NOT READY </p>
      </div>

      <FooterBar/>

    </div>
  )
}

export default Home
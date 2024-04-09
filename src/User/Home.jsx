import React from 'react'
import NavBar from './NavBar'
import style from './Styles.module.css'
import one from '../assets/1B-0.png'
import three from '../assets/3B-0.png'
import two from '../assets/booster-0.png'
import team from '../assets/aa.jpg'
import { Link } from 'react-router-dom'
import FooterBar from './Footer'
import FAQSection from './Faq'



const Home = () => {
  const handleMobileClick = (mobile) => {
    window.location.href = `tel:${mobile}`;
  };

  return (
    <div>
      <NavBar />

      <header id={style.header}>
        <div className='container text-white' style={{ marginTop: '5em' }}>
          <p className='h1'>ENHANCE AND ENLARGE <br /> YOUR PENIS</p>
          <p className='mt-4 fs-5'> a non-surgical and speedy solution to <br /> enhance your manhood? Look no further! Our non- <br />surgical solutions provide immediate
            and noticeable <br />results without any downtime. Our procedures not<br /> only increases penis size but also enhances the <br />appearance of the glans
            and scrotum, delivering <br /> exceptional results.
          </p>
        </div>

      </header>

      <div className='  mb-5 jumbotron mx-auto'>
        <div className='row mx-auto '>
          <div className='col-lg-3 mx-auto'>
            <img src={team} className='w-50 ' style={{ borderRadius: '50px' }} />
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

      <div className='container mt-5 mx -auto'>
        <p className='fs-1 fw-bold'> PRODUCTS</p>
        {/* <p>WANT BIGGER SIZE? these gives fast and long-term effect</p> */}
        {/* <p>GIVE THEM WHAT THEY WANT WITH THE HELP OF THESE PRODUCTS</p> */}
        <div className='row text-center mt-4 mb-5' id='home'>
          <div className='col-lg-3 mx-auto shadow bg-white rounded-sm  '>
            <img src={one} className='w-100' />
            <p className='text-primary fw-bold mt-2'>Dell</p>
            <p className='fw-bold'>$45.00</p>
            <Link to="/details" className="btn btn-main-1 w-100 text-medium text-white fw-bold fs-6 rounded-0 py-3 px-4" style={{ backgroundColor: '#1C7C68' }}>View Button</Link>
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
          <Link to="https://wa.link/7rbwz0" className="text-white"><i className="fab fa-whatsapp"></i></Link>
        </button>
        <button className='btn btn-success fs-4 ml-auto '>
          <i className='fa fa-phone text-white text-decoration-none' onClick={() => handleMobileClick('+2348077628697')}></i>
        </button>
      </div>

      {/* <div className='container' >
        <div className={style.scroll}>
          <img id={style.image} src="img_5terre.jpg" alt="Cinque Terre" width="600" height="400" />
          <img id={style.image} src="img_forest.jpg" alt="Forest" width="600" height="400" />
          <img id={style.image} src="img_lights.jpg" alt="Northern Lights" width="600" height="400" />
          <img id={style.image} src="img_mountains.jpg" alt="Mountains" width="600" height="400" />
        </div>
      </div> */}

      <FAQSection />

      <div className='bg-danger text-center mx-auto p-2 mx-auto text-white mb-4 fw-bold'>
        <p>DO NOT PLACE ORDER FOR THIS PRODUCT IF YOU ARE NOT READY </p>
      </div>

      <FooterBar />

    </div>
  )
}

export default Home
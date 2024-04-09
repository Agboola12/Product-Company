import React from 'react'
// import NavBar from './NavBar'
import style from './Styles.module.css'
import one from '../assets/1B-0.png'
import three from '../assets/3B-0.png'
import two from '../assets/booster-0.png'
// import team from '../assets/00.jpg'
import { Link } from 'react-router-dom'
// import FooterBar from './Footer'
import FAQSection from './Faq'
// import one from '../assets/1B-0.png'
import rul from '../assets/rules-1.gif'
import rule from '../assets/rules-2.gif'
import rules from '../assets/rules-3.gif'



const Home = () => {
  const handleMobileClick = (mobile) => {
    window.location.href = `tel:${mobile}`;
  };

  return (
    <div>
      {/* <NavBar /> */}

      <header id={style.header}>
        <div className='container text-white ' style={{ marginTop: '5em' }}>
          <p className='h1'>ENHANCE AND ENLARGE <br /> YOUR PENIS</p>
          <p className='mt-4 fs-5'> a non-surgical and speedy solution to <br /> enhance your manhood? Look no further! Our non- <br />surgical solutions provide immediate
            and noticeable <br />results without any downtime. Our procedures not<br /> only increases penis size but also enhances the <br />appearance of the glans
            and scrotum, delivering <br /> exceptional results.
          </p>
        </div>

      </header>

      {/* <div className='  mb-5 jumbotron mx-auto'>
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
      </div> */}

      <div className='container mt-5 mx -auto'>
        <p className='fs-1 fw-bold'> PRODUCTS</p>
        <p className='ml-5 fs-3'>Payment on delivery</p>
        <div className='row text-center mt-4 mb-5' id='home'>
          <div className='col-lg-3 mx-auto shadow bg-white rounded-sm  '>
            <img src={one} className='w-100' />
            <p className=' fw-bold mt-2'>Sperm Booster</p>
            <p className='fw-bold'>#25,000</p>
            <Link to="https://wa.link/sea1s7" className='btn btn-main-1 w-100 text-medium text-white fw-bold fs-4 rounded-0 py-3 px-4 mb-4 rounded-lg' style={{ backgroundColor: '#621A3F' }}>Order Now</Link>
          </div>

          <div className='col-lg-3 mx-auto shadow bg-white rounded-sm  '>
            <img src={two} className='w-100' />
            <p className=' fw-bold mt-2'>Sperm Booster</p>
            <p className='fw-bold'>#25,000</p>
            <Link to="https://wa.link/sea1s7" className='btn btn-main-1 w-100 text-medium text-white fw-bold fs-4 rounded-0 py-3 px-4 mb-4 rounded-lg' style={{ backgroundColor: '#621A3F' }}>Order Now</Link>
          </div>

          <div className='col-lg-3 mx-auto shadow bg-white rounded-sm'>
            <img src={three} className='w-100' />
            <p className=' fw-bold mt-2'>Sperm Booster</p>
            <p className='fw-bold'>#25,000</p>
            <Link to="https://wa.link/sea1s7" className='btn btn-main-1 w-100 text-medium text-white fw-bold fs-4 rounded-0 py-3 px-4 mb-4 rounded-lg' style={{ backgroundColor: '#621A3F' }}>Order Now</Link>
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

      <header className=' text-white' id={style.head}>
                <div className='container'>
                    <div className='row mx-auto '>
                        <div className='col-lg-9  mx-auto '>
                            <p className='fw-bold mt-5' style={{ fontSize: '5em' }}> WANT BIGGER <p style={{ color: '#621A3F' }}> SIZE?</p>  </p>
                            <p className='fw-bold mt-3' style={{ fontSize: '2em' }}>Sperm Booster <br /> gives fast and <br /> long-term effect</p>
                        </div>
                        {/* <div className='col-lg-4  mx-auto p-1 text-center '>
                            <img src={one} className='w-100 ' />
                            <p className='fw-bold fs-1 '>#25,000</p>
                            <Link to="https://wa.link/sea1s7" className='btn btn-main-1 w-50 text-medium text-white fw-bold fs-4 rounded-0 py-3 px-4 mb-4 rounded-lg' style={{ backgroundColor: '#621A3F' }}>Order Now</Link>
                        </div> */}
                    </div>

                    <div className='mt-5'>
                        <p className='fw-bold h1 text-center'>GIVE THEM WHAT THEY WANT <br /> WITH THE HELP OF SPERM BOOSTER</p>
                        <div className='row mx-auto text-center'>
                            {/* <div className='col-md-6 mx-auto'>
                                <img src={one} className='w-100 ' />
                            </div> */}
                            <div className='col-md-6 text-center text-right fs-5 mx-auto mt-5'>
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
                            <div className='col-lg-4 shadow-lg p-5 rounded'>
                                    <p className='fs-3 fw-bold text-right' style={{ color: '#621A3F' }}>1</p>
                                    <p className='fw-bold fs-4' style={{ color: '#621A3F' }} >TAKE 1 CAPSULE PER DAY </p>
                                    <img src={rul} alt="rules" />
                                    <p className='mt-5'>The active components of the drug cumulatively affect the penis cells and increase its length and volume.</p>
                            </div>
                            <div className='col-lg-4 shadow-lg p-5 rounded'>
                                    <p className='fs-3 fw-bold text-right' style={{ color: '#621A3F' }}>2</p>
                                    <p className='fw-bold fs-4' style={{ color: '#621A3F' }} >TAKE AN EXTRA CAPSULE BEFORE SEX </p>
                                    <img src={rule} alt="rules" />
                                    <p className='mt-3'>Increase your excitement by taking Sperm Booster before sex. Enjoy your size and stamina!</p>
                            </div>
                            <div className='col-lg-4 shadow-lg p-5 rounded'>
                                    <p className='fs-3 fw-bold text-right' style={{ color: '#621A3F' }}>3</p>
                                    <p className='fw-bold fs-4' style={{ color: '#621A3F' }} >TAKE THE COMPLETE COURSE </p>
                                    <img src={rules} alt="rules" />
                                    <p className='mt-5'>The effect of Sperm Booster is cumulative. The longer you take it - the better and more stable results you get.</p>
                            </div>
                        </div>
                    </div>


                </div>
            </header>

            <div className='container mx-auto text-center'>
                <p className='fw-bold fs-1 mt-5'> YOU SHOULD TRY IT! </p>
                <div className='row mx-auto text-center' style={{marginTop:'5em'}}>
                    <div className='col-lg-6 text-center'>
                        <p className='fw-bold' style={{ fontSize: '2em' }}>YOU WILL BE SURPRISED TO KNOW ABOUT THE HIDDEN POWER INSIDE YOU!</p>
                    </div>
                    {/* <div className='col-lg-4'>
                        <img src={one} className='w-100 ' />
                    </div> */}
                    <div className='col-lg-6 mt-1 text-center'>
                        <p>Sex anytime and anywhere: </p>
                        <p> On the table, in the car, </p>
                        <p className='fw-bold'>in the cinema hall, </p>
                        <p className='fw-bold' style={{ color: '#621A3F' }}>OR IN BED AT HOME. </p>
                        <Link to="https://wa.link/sea1s7" className='btn btn-main-1 w-50 text-medium text-white fw-bold fs-4 rounded-0 py-3 px-4 mb-4 rounded-lg' style={{ backgroundColor: '#621A3F' }}>Get the Product</Link>
                    </div>
                </div>
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

      {/* <FooterBar /> */}

    </div>
  )
}

export default Home
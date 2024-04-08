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

      {/* <div className='container p-5 mb-5' id={style.service}> */}
      <div className='container mt-5 mx -auto'>
        <p className='fs-1 fw-bold'> PRODUCTS</p>
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
          {/* <i className='fab fa-whatsapp text-white '></i> */}
          <Link to="https://wa.link/7rbwz0" className="text-white"><i className="fab fa-whatsapp"></i></Link>

        </button>
        <button className='btn btn-success fs-4 ml-auto '>
          {/* <i className='fa fa-phone text-white '></i> */}
          <i className='fa fa-phone text-white text-decoration-none' onClick={() => handleMobileClick('+2348077628697')}></i>
        </button>
      </div>

      


      {/*  */}
      {/* <div>
        <div className="faq-section bg-light py-5" id="faq">
          <div className="container">
            <h2 className="text-bold text-center mb-5">Frequently Asked Questions</h2>
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="accordion accordion-faq" id="accordionfaq">
                  <div className="accordion-item mb-3">
                    <h2 className="accordion-header" id="headingOneFaq">
                      <button className="accordion-button text-normal bg-transparent" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOneFaq" aria-expanded="true" aria-controls="collapseOneFaq">
                        <div className="d-flex align-items-lg-center align-items-start">
                          <h6 className="make-text-medium mb-0">Who is a candidate for penis enlargement and enhancement?</h6>
                        </div>
                      </button>
                    </h2>
                    <div id="collapseOneFaq" className="accordion-collapse collapse show" aria-labelledby="headingOneFaq"
                      data-bs-parent="#accordionfaq">
                      <div className="accordion-body">
                        <div className="text-light-grey">
                          If you’re feeling dissatisfied about the look and size of your penis, then this procedure may help you feel more confident.
                          We understand that feeling confident and satisfied with your body is important, and we’re here to help you. Before you begin,
                          it’s important to have a realistic view of your current size and expectations for enhancement. During your private consultation, our expert physician will discuss your concerns and provide detailed information about the risks and benefits of the procedure.
                          We believe that each person is unique and we will conduct a physical exam to determine your individual needs and options.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-3">
                    <h2 className="accordion-header" id="headingTwoFaq">
                      <button className="accordion-button text-normal bg-transparent collapsed" type="button"
                        data-bs-toggle="collapse" data-bs-target="#collapseTwoFaq" aria-expanded="false"
                        aria-controls="collapseTwoFaq">
                        <div className="d-flex align-items-lg-center align-items-start">
                          <h6 className="make-text-medium mb-0">Do I have to be circumcised to get penile augmentation treatment?</h6>
                        </div>
                      </button>
                    </h2>
                    <div id="collapseTwoFaq" className="accordion-collapse collapse" aria-labelledby="headingTwoFaq"
                      data-bs-parent="#accordionfaq">
                      <div className="accordion-body">
                        <div className="text-light-grey">
                          <p>No, there is no requirement for you to be circumcised. We provide treatments for men who are both circumcised and non-circumcised.
                            We recommend scheduling a confidential consultation with our experienced male enhancement specialists to assess the most appropriate
                            treatment option and discuss expected results.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-3">
                    <h2 className="accordion-header" id="headingThreeFaq">
                      <button className="accordion-button text-normal bg-transparent collapsed" type="button"
                        data-bs-toggle="collapse" data-bs-target="#collapseThreeFaq" aria-expanded="false"
                        aria-controls="collapseThreeFaq">
                        <div className="d-flex align-items-lg-center align-items-start">
                          <h6 className="make-text-medium mb-0">How long will the procedure take?</h6>
                        </div>
                      </button>
                    </h2>
                    <div id="collapseThreeFaq" className="accordion-collapse collapse" aria-labelledby="headingThreeFaq"
                      data-bs-parent="#accordionfaq">
                      <div className="accordion-body">
                        <div className="text-light-grey">
                          <p>The procedure typically takes around 30 minutes to complete, although this can vary depending on the individual’s needs and goals.
                            Following the procedure, the patient can resume their regular activities without any significant downtime.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

<div>
    <div className="faq-section bg-light py-5" id="faq">
      <div className="container">
        <h2 className="text-bold text-center mb-5">Frequently Asked Questions</h2>
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="accordion accordion-faq" id="accordionfaq">
              <div className="accordion-item mb-3">
                <h2 className="accordion-header" id="headingOneFaq">
                  <button className="accordion-button text-normal bg-transparent" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseOneFaq" aria-expanded="true" aria-controls="collapseOneFaq">
                    <div className="d-flex align-items-lg-center align-items-start">
                      <h6 className="make-text-medium mb-0">How secure is the voting system?</h6>
                    </div>
                  </button>
                </h2>
                <div id="collapseOneFaq" className="accordion-collapse collapse show" aria-labelledby="headingOneFaq"
                  data-bs-parent="#accordionfaq">
                  <div className="accordion-body">
                    <div className="text-light-grey">Our voting system employs robust security measures, including encryption and authentication protocols, to ensure the utmost security and protection of voter information and the integrity of the voting process.</div>
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-3">
                <h2 className="accordion-header" id="headingTwoFaq">
                  <button className="accordion-button text-normal bg-transparent collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseTwoFaq" aria-expanded="false"
                    aria-controls="collapseTwoFaq">
                    <div className="d-flex align-items-lg-center align-items-start">
                      <h6 className="make-text-medium mb-0">Can participants change their votes?</h6>
                    </div>
                  </button>
                </h2>
                <div id="collapseTwoFaq" className="accordion-collapse collapse" aria-labelledby="headingTwoFaq"
                  data-bs-parent="#accordionfaq">
                  <div className="accordion-body">
                    <div className="text-light-grey">Once a vote is cast, participants typically cannot change their votes to maintain the integrity and fairness of the voting process.</div>
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-3">
                <h2 className="accordion-header" id="headingThreeFaq">
                  <button className="accordion-button text-normal bg-transparent collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseThreeFaq" aria-expanded="false"
                    aria-controls="collapseThreeFaq">
                    <div className="d-flex align-items-lg-center align-items-start">
                      <h6 className="make-text-medium mb-0">How are the results calculated and displayed?</h6>
                    </div>
                  </button>
                </h2>
                <div id="collapseThreeFaq" className="accordion-collapse collapse" aria-labelledby="headingThreeFaq"
                  data-bs-parent="#accordionfaq">
                  <div className="accordion-body">
                    <div className="text-light-grey">The voting system calculates the results based on the chosen voting method (e.g., majority, ranked-choice, etc.) and displays them in a clear and concise format, often providing real-time updates for immediate access.</div>
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-3">
                <h2 className="accordion-header" id="headingFourFaq">
                  <button className="accordion-button text-normal bg-transparent collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseFourFaq" aria-expanded="false"
                    aria-controls="collapseFourFaq">
                    <div className="d-flex align-items-lg-center align-items-start">
                      <h6 className="make-text-medium mb-0">Is there a way to export or download the voting results?</h6>
                    </div>
                  </button>
                </h2>
                <div id="collapseFourFaq" className="accordion-collapse collapse" aria-labelledby="headingFourFaq"
                  data-bs-parent="#accordionfaq">
                  <div className="accordion-body">
                    <div className="text-light-grey">Yes, our voting system usually offers the functionality to export or download the voting results in various formats (e.g., CSV, PDF), allowing you to analyze and store the data as needed.</div>
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-3">
                <h2 className="accordion-header" id="headingFiveFaq">
                  <button className="accordion-button text-normal bg-transparent collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseFiveFaq" aria-expanded="false"
                    aria-controls="collapseFiveFaq">
                    <div className="d-flex align-items-lg-center align-items-start">
                      <h6 className="make-text-medium mb-0">Is voter anonymity guaranteed?</h6>
                    </div>
                  </button>
                </h2>
                <div id="collapseFiveFaq" className="accordion-collapse collapse" aria-labelledby="headingFiveFaq"
                  data-bs-parent="#accordionfaq">
                  <div className="accordion-body">
                    <div className="text-light-grey">Yes, our voting system ensures voter anonymity, protecting the privacy of participants by separating their personal information from their cast votes, thus upholding the confidentiality and integrity of the voting process.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

      {/*  */}


      <div className='bg-danger text-center mx-auto p-2 mx-auto text-white mb-4 fw-bold'>
        <p>DO NOT PLACE ORDER FOR THIS PRODUCT IF YOU ARE NOT READY </p>
      </div>

      <FooterBar />

    </div>
  )
}

export default Home
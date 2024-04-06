import React from 'react';
import style from './Styles.module.css'
import { Link } from 'react-router-dom';

const FooterBar = () => {

    const handleMobileClick = (mobile) => {
        window.location.href = `tel:${mobile}`;
    };

    const handleEmailClick = (email) => {
        window.location.href = `mailto:${email}`;
    };

    return (
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
                        <Link to="https://wa.link/7rbwz0" className="text-white text-decoration-none">+2348077628697</Link>
                        {/* <li className='text-white text-decoration-none' onClick={() => handleMobileClick('+2348077628697')}>+2348077628697</li> */}
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
                            <li><Link to="https://wa.link/7rbwz0" className="text-white"><i className="fab fa-whatsapp"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterBar;

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import'./Footer.css';

function Footer() {
    return (
        <div className='footer-container' >
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    what do you thing about this?
                </p>
                <p className='footer-subscription-text'>
                you can unsubcribe at any time.
                </p>
                <div className= 'input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='Your Email' className='footer-input'/>

                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>     
            </section>

            <div className='footer-links'>
                <div className=' footer-link-wrapper'>
                    <div className=' footer-link-items'>
                        <h2>contact Us</h2>
                        <Link to='./sign-up'>How it works</Link>
                        <Link to='./'>Test imoianls</Link>
                        <Link to='./'>Careers</Link>
                        <Link to='./'>Ivestors</Link>
                        <Link to='./'>Terms of Service</Link>
                    </div>
                    <div className=' footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='./sign-up'>How it works</Link>
                        <Link to='./'>Test imoianls</Link>
                        <Link to='./'>Careers</Link>
                        <Link to='./'>Ivestors</Link>
                        <Link to='./'>Terms of Service</Link>
                    </div>
                </div>
                <div className=' footer-link-wrapper'>
                    <div className=' footer-link-items'>
                        <h2>Explore</h2>
                        <Link to='./sign-up'>How it works</Link>
                        <Link to='./'>Test imoianls</Link>
                        <Link to='./'>Careers</Link>
                        <Link to='./'>Ivestors</Link>
                        <Link to='./'>Terms of Service</Link>
                    </div>
                    <div className=' footer-link-items'>
                        <h2>Learn More ++</h2>
                        <Link to='./sign-up'>Data Privacy Policy</Link>
                        <Link to='./'>Test imoianls</Link>
                        <Link to='./'>Careers</Link>
                        <Link to='./'>Ivestors</Link>
                        <Link to='./'>Terms of Service</Link>
                    </div>
                </div>
            </div>
            
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            IDRIS <i className='fab fa-typo3'/>
                        </Link>
                    </div>
                    <small className='website-rights'>
                        Idris ⓒ 2022
                    </small>

                    <div className='social-icons'>
                        <Link className='social-icon-link facebook' 
                              to='/' 
                              target='-blank' 
                              aria-label='facbook'>

                                <i className='fab fa-facebook-f'/>

                    
                        </Link>
                        <Link className='social-icon-link instagram' 
                              to='/' 
                              target='-blank' 
                              aria-label='instagram'>
                            <i className='fab fa-instagram'/>                    
                        </Link>

                        <Link className='social-icon-link twitter' 
                              to='/' 
                              target='-blank' 
                              aria-label='twitter'>
                            <i className='fab fa-twitter'/>
                        </Link>
                        <Link className='social-icon-link linkedin' 
                              to='/' 
                              target='-blank' 
                              aria-label='linkedIn'>
                            <i className='fab fa-linkedin'/>
                        </Link>
                    </div>
                    

                </div>
            </section>
        </div>
    )
}

export default Footer

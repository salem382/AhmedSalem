import './contact.scss';
import MainHead from '../mainHead/MainHead';
import {Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap, faEnvelope, faSquarePhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faCodepen } from "@fortawesome/free-brands-svg-icons"
import  MainBtn from '../mainBtn/MainBtn';
import {useState, useEffect} from 'react';
const Contact = () => {

    
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
    }, [])
    return (
        <div className='contact-page text-start' style={{paddingTop:loading ? '0' : '50px'}}>
            <Container>
             <MainHead title1='GETIN' title2='TOUTCH' back='CONTACT'/>
                <Row style={{marginTop:'180px'}}>
                    <Col lg = {4}>
                        <div>
                            <h3 >DON'T BE SHY !</h3>
                            <p className='mb-5'>
                                Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                            </p>
                            <div className='item mt-3 d-flex'>
                                <div>
                                    <FontAwesomeIcon className='fs-1 text-yellow' icon={faMap}/>
                                </div>
                                <div className='ps-4'>
                                    <h5 style={{color:'#c1c1c1'}}>ADRESS POINT</h5>
                                    <p>
                                        ismailia, Egypt
                                    </p>
                                </div>
                            </div>
                            <div className='item mt-3 d-flex'>
                                <div>
                                    <FontAwesomeIcon className='fs-1 text-yellow' icon={faEnvelope}/>
                                </div>
                                <div className='ps-4'>
                                    <h5 style={{color:'#c1c1c1'}}>MAIL ME</h5>
                                    <p>
                                        ahmedsalem.official2@gmail.com
                                    </p>
                                </div>
                            </div>
                            <div className='item mt-3 d-flex'>
                                <div>
                                    <FontAwesomeIcon className='fs-1 text-yellow' icon={faSquarePhone}/>
                                </div>
                                <div className='ps-4'>
                                    <h5 style={{color:'#c1c1c1'}}>CALL ME</h5>
                                    <p>
                                        01144535054
                                    </p>
                                </div>
                            </div>
                            <ul className='list-unstyled p-0 d-flex'>
                                <li className='mx-2 fs-4 icon-demo text-center rounded-circle'><a className='text-white' href='https://github.com/salem382' target='_blanck'><FontAwesomeIcon icon={faGithub}/></a></li>
                                <li className='mx-2 fs-4 icon-demo text-center rounded-circle'><FontAwesomeIcon icon={faLinkedin}/></li>
                                <li className='mx-2 fs-4 icon-demo text-center rounded-circle'><a className='text-white' href='https://codepen.io/your-work' target='_blanck'><FontAwesomeIcon icon={faCodepen}/></a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <form>
                            <div className='d-flex first-input justify-content-between'>
                                <input type='text' placeholder='Your Name'/>
                                <input type='email' placeholder='Your Email'/>
                            </div>
                            <div>
                                <input type='text' placeholder='Your Subject'/>
                            </div>
                            <div>
                               <textarea placeholder='Your Message'></textarea>
                            </div>
                            <MainBtn title='SEND MESSAGE' ico = {faPaperPlane}/>
                        </form>
                    </Col>
                </Row>
            </Container>
            <div className='section-overlay' style={{height:loading ? '0' : '100%'}}></div>
        </div>
    )
}
export default Contact;
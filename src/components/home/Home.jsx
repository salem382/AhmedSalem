
import {Container, Row, Col} from 'react-bootstrap';
import './home.scss';
import { useEffect, useState } from 'react';
import MainBtn from '../mainBtn/MainBtn';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';


const Home = ({setActive}) => {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
    }, [])
    return (
        <div className="home bg-color text-white" style={{paddingTop:loading ? '0' : '50px' }}>
            
           <Container>
            <Row className='h-100 row align-items-center'>
                <Col lg={4}>
                    <div className="photo position-relative">
                            <img className='w-100'  src="images/555.jpg" alt=""/>
                            <div className='layout d-none d-lg-block'></div>
                    </div>
                </Col>
                <Col lg= {7}>
                    <div className="info text-center col-md-left">
                        <h1><span className='text-yellow'>I'M AHMED SALEM.</span><br /> FRONTEND DEVOLBER</h1>
                        <p>
                           MERN Stack developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
                        </p>
                        <div onClick={() => setActive(1)} style={{cursor:'pointer !important'}}>
                            <Link to='/about'><MainBtn title='more about me' ico={faArrowRight}/></Link> 
                        </div>
                    </div>
                </Col>
            </Row>
           </Container>
           <div className='section-overlay' style={{height:loading ? '0' : '100%'}}></div>
        </div>
    )
}

export default Home;
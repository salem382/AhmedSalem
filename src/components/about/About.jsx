import MainHead from "../mainHead/MainHead";
import './about.scss';
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {Row, Container, Col} from 'react-bootstrap'
import MainBtn from "../mainBtn/MainBtn";
import { faDownLong } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
const skillsArr= [{name:'Html',percentage:'75'},
{name:'css',percentage:'85'},
{name:'Javascript',percentage:'90'},
{name:'jQuery',percentage:'90'},
{name:'typescript',percentage:'75'},
{name:'Bootstrap',percentage:'90'},
{name:'sass',percentage:'80'},
{name:'ajax',percentage:'95'},
{name:'React',percentage:'90'},
{name:'Redux',percentage:'90'}];

const About = () => {

    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
    }, [])
    return (
        <div className='about-page bg-color' style={{paddingTop:loading ? '0' : '50px'}}>
            <div className="moving-page">
            <Container>
            <MainHead title1 = 'ABOUT' title2 = 'ME' back = 'RESUME'/>
            <h2 style={{marginTop:'150px'}} className="text-white">Skills</h2>
                <Row>
                    {skillsArr.map ((item, ind) => 
                    <Col key={ind} md={3} sm={4} className='col-6'>
                    <div className="mx-auto" style={{width:'100px',height:'100px', marginTop:'50px'}}>
                    <CircularProgressbar 
                    styles={buildStyles({
                        pathColor: `#FFB912`,
                        textColor: '#fff',
                        trailColor: '#4B4B4B'
                    })}
                    value={item.percentage} text={item.percentage + '%'} />;
                    <p style={{marginTop:'-15px'}} className="text-white ">{item.name}</p>
                    </div></Col>)}
                </Row>
                <Row>
                    <Col md={6}>
                        <div className="text-start personal-info">
                            <h2 className="text-white mt-5 mb-4">PERSONAL INFOS</h2>
                            <div className="d-flex contact-info justify-content-between">
                                <ul className="list-unstyled p-0">
                                    <li style={{color:'#a7a7a7'}}>First Name: <span className="text-white">Ahmed</span></li>
                                    <li style={{color:'#a7a7a7'}}>Age: <span className="text-white">25 Years</span></li>
                                    <li style={{color:'#a7a7a7'}}>Freelancer: <span className="text-white">avaliable</span></li>
                                    <li style={{color:'#a7a7a7'}}>Phone: <span className="text-white">01144535054</span></li>
                                </ul>
                                <ul className="list-unstyled p-0">
                                    <li style={{color:'#a7a7a7'}}>Last Name: <span className="text-white">Salem</span></li>
                                    <li style={{color:'#a7a7a7'}}>Adress: <span className="text-white">ismailia, Egype</span></li>
                                    <li style={{color:'#a7a7a7'}}>Email: <span className="text-white">ahmedsalem.official2@gmail.com</span></li>
                                </ul>
                            </div>
                            <MainBtn title = 'DOWNLOAD CV' ico={faDownLong}/>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='section-overlay' style={{height:loading ? '0' : '100%'}}></div>
            </div>
        </div>
    )
}

export default About;
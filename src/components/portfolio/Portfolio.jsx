import { useEffect, useState } from 'react';
import MainHead from '../mainHead/MainHead';
import './portfolio.scss';
import {Container, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faCode } from '@fortawesome/free-solid-svg-icons'

const btns = ['All','Frontend','Backend', 'javascript', 'cpp'];
const data  = [
{name: 'Ecommerce Website', imgSrc:'images/eco.png',codeLink:'https://github.com/salem382/nodeJs-noon-clone',demoLink:'https://github.com/salem382/nodeJs-noon-clone',depend:['All','Backend']},
{name: 'Middle School', imgSrc:'/images/middleSchool.jpg',codeLink:'https://github.com/salem382/EgyptPharmacies',demoLink:'https://egypt-pharmacies.vercel.app/',depend:['All','Frontend']},
{name: 'High School', imgSrc:'/images/highSchool.jpg',codeLink:'https://github.com/salem382/EgyptPharmacies',demoLink:'https://egypt-pharmacies.vercel.app/',depend:['All','Frontend']},
{name: 'Pharmacies', imgSrc:'images/egyptpharmacies.png',codeLink:'https://github.com/salem382/EgyptPharmacies',demoLink:'https://egypt-pharmacies.vercel.app/',depend:['All','Frontend']},
{name: 'Casher', imgSrc:'images/cashir.png',codeLink:'https://github.com/salem382/Cashir-Program',demoLink:'https://cashir-program.vercel.app/',depend:['All','Frontend']},
{name: 'Coffe', imgSrc:'images/coffe.png',codeLink:'https://github.com/salem382/coffe-shop',demoLink:'https://coffe-shop-xi.vercel.app/',depend:['All','Frontend']},
{name: 'Midstr', imgSrc:'images/midstr.png',codeLink:'https://github.com/salem382/midstr',demoLink:'https://midstr-flax.vercel.app/',depend:['All','Frontend']},
{name: 'Movies fetch', imgSrc:'images/moviesApi.png',codeLink:'https://github.com/salem382/movies-api',demoLink:'https://movies-api-smoky-five.vercel.app/',depend:['All','Frontend']},
{name: 'Movies React', imgSrc:'images/movies.png',codeLink:'https://github.com/salem382/movies',demoLink:'https://movies-ten-opal.vercel.app/search',depend:['All','Frontend']},
{name: 'CRUDS', imgSrc:'images/crud.png',codeLink:'https://github.com/salem382/CRUDS',demoLink:'https://salem382.github.io/CRUDS/',depend:['All','javascript']},
{name: 'Hangman', imgSrc:'images/hangman.png',codeLink:'https://github.com/salem382/hangman-game',demoLink:'https://salem382.github.io/hangman-game/',depend:['All','javascript']},
{name: 'Memory', imgSrc:'images/memory.png',codeLink:'https://github.com/salem382/memory_game',demoLink:'https://salem382.github.io/memory_game/',depend:['All','javascript']},
{name: 'Arabx', imgSrc:'images/arabx.png',codeLink:'https://github.com/salem382/arabx',demoLink:'https://salem382.github.io/arabx/',depend:['All','Frontend']},
{name: 'Elnagar', imgSrc:'images/elgar.png',codeLink:'https://github.com/salem382/Elnagar',demoLink:'https://salem382.github.io/Elnagar/',depend:['All','Frontend']},
{name: 'Fokir', imgSrc:'images/fokir.png',codeLink:'https://github.com/salem382/Fokir',demoLink:'https://salem382.github.io/Fokir/',depend:['All','Frontend']},
{name: 'Book List', imgSrc:'images/boook.png',codeLink:'https://github.com/salem382/Book-store',demoLink:'https://github.com/salem382/Book-store',depend:['All','React']},
{name: 'Backend Middle School', imgSrc:'images/middle.png',codeLink:'https://github.com/salem382/nodeJs-Middle-School',demoLink:'https://github.com/salem382/nodeJs-Middle-School',depend:['All','Backend']},
{name: 'Backend high School', imgSrc:'images/high.png',codeLink:'https://github.com/salem382/nodJs-high-school',demoLink:'https://github.com/salem382/nodJs-high-school',depend:['All','Backend']},
{name: 'Library system', imgSrc:'images/lib.jpg',codeLink:'https://github.com/salem382/nodeJs_librarySystem',demoLink:'https://github.com/salem382/nodeJs_librarySystem',depend:['All','Backend']},
{name: 'Snake Game', imgSrc:'images/snake.png',codeLink:'https://github.com/salem382/cpp-snake-game',demoLink:'https://github.com/salem382/cpp-snake-game',depend:['All','cpp']},
{name: 'Ping pong Game', imgSrc:'images/pong.jpg',codeLink:'https://github.com/salem382/cpp-pingPong-game',demoLink:'https://github.com/salem382/cpp-pingPong-game',depend:['All','cpp']},
{name: 'Cross Road Game', imgSrc:'images/cross.png',codeLink:'https://github.com/salem382/cpp-crossRoad-game',demoLink:'https://github.com/salem382/cpp-crossRoad-game',depend:['All','cpp']},
{name: 'Ask me System', imgSrc:'images/ask.png',codeLink:'https://github.com/salem382/cpp-askMe-system',demoLink:'https://github.com/salem382/cpp-askMe-system',depend:['All','cpp']},
];

const Portfolio = () => {

    const [items, setItems] = useState([]);
    const [active, setActive] = useState(0);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setItems([...data]);
        setLoading(true);
    },[])
    
    const handleClickLink = (ind, ele) => {
        setActive(ind);
        let x = data.filter(item => item.depend.includes(ele))
        setItems([...x]);
    }
    return (
        <div className="portfolio-page" style={{paddingTop:loading ? '0' : '50px'}}>
            <Container>
            <MainHead title1='MY' title2='PORTFOLIO' back='WORKS'/>
            <div style={{marginTop : '150px'}}>
                <ul className='list-unstyled p-0 d-flex justify-content-center'>
                    {btns.map((item, ind) => <li onClick={() => handleClickLink(ind, item)} key={ind} className={ind === active ?'active mx-3 fs-5': 'mx-3 fs-5'} style={{cursor:'pointer'}}> 
                        {item}
                    </li>)}
                </ul>
                <ul className='list-unstyled p-0 mt-5'>
                    <Row className='gy-4'>
                        {items.map((item, ind) =><Col md={4} key={ind}>
                          <li>
                            <div className={`${item.name} portfolio-item w-100 position-relative`} style={{height:'160px',overflow:'hidden'}}>
                                <img className='w-100 position-absolute' src={item.imgSrc} alt='' style={{width:'100%'}}/>
                            </div>
                            <div className='d-flex justify-content-between p-2 portfolio-controls' style={{background:'#252525'}}>
                                <a className='text-white' href={item.codeLink} target='blank'>
                                    <FontAwesomeIcon className='fs-4' icon={faCode}/>
                                </a>
                                <p>{item.name}</p>
                                <a className='text-white' href={item.demoLink} target='blank'>
                                    <FontAwesomeIcon className='fs-4' icon={faEye}/>
                                </a>
                            </div>
                          </li>
                        </Col> )}
                        
                    </Row>   
                </ul>
            </div>
            </Container>
            <div className='section-overlay' style={{height:loading ? '0' : '100%'}}></div>
        </div>
    )
}

export default Portfolio;

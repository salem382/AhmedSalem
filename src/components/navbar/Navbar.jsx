import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser,  faBriefcase, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import './navbar.scss';
import {NavLink} from 'react-router-dom';
import { useState } from 'react';
const linksArr = [{name:'hom',to:'/',iconName:faHouseUser},{name:'about',to:'about',iconName:faBriefcase},{name:'portfolio',to:'portfolio',iconName:faBriefcase}, {name:'contact',to:'contact',iconName:faEnvelope}]

const Navbar = ({active, setActive}) => {

    
    return (
        <>
        <ul className='nav list-unstyled p-0'>
            {linksArr.map((item, ind) => <NavLink key={ind} style={{color:'#fff'}} onClick={() => setActive(ind)} to = {item.to}>
                <li className={ind === active ? `active ${item.name}` : `${item.name}`}>
                    <FontAwesomeIcon className='icon' icon = {item.iconName}/> 
                    <div className='hover-shape'></div> 
                </li>
            </NavLink>)}
        </ul>
        </>
    )
}

export default Navbar;
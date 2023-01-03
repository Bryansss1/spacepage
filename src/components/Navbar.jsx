import React from 'react';
import { useState } from 'react';
import Logo from "/space-tourism-website-main/starter-code/assets/shared/logo.svg"
import { Link } from 'react-router-dom';
const Navbar = () => {

    const [mobileClick,setMo]=useState(false)

    return (
        
             <nav className='navbar-layout'>
        <img src={Logo} alt="" />
        <p className='line'></p>
        {mobileClick !==true?<p className='uu' onClick={()=>setMo(!mobileClick)} style={{textAlign:"center",cursor:"pointer"}}>Menu<i className='bx bx-planet bx-md'></i></p>:""}
         <ul className={`navla ${mobileClick===true?"visible":""}`}>
            <i onClick={()=>setMo(!mobileClick)} className='bx bxs-x-circle bx-md aa'></i>
            <li><Link to="/"><span>00</span> Home</Link></li>
            <li><Link to="/Destination"><span>01</span> Destination</Link></li>
            <li><Link to="/Crew"><span>02</span> Crew</Link></li>
            <li><Link to="/Tecnology"><span>03</span> Tecnology</Link></li>
          </ul>
        </nav>
        
    );
};

export default Navbar;
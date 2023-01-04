import React from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
const Home = () => {
const navigate=useNavigate()


    return (
    
        <section className='home-section'>
            <Navbar/>
<section className='flexi-home'>
      <article className='header-home'>
            <div>
                <p className='soyou'>So, you want to travel to</p>
                <h1>SPACE</h1>
            </div>
            <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!
            </p>
        </article>
            <button onClick={()=>navigate("/Destination")}>EXPLORE</button>
        </section>

</section>
    
    );
};

export default Home;
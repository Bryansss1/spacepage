import React from 'react';
import styles from "/src/styles/Crew.module.scss"
import Navbar from '../components/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import victorphoto from "/space-tourism-website-main/starter-code/assets/crew/image-victor-glover.png"
import douglaphoto from "/space-tourism-website-main/starter-code/assets/crew/image-douglas-hurley.png"
import markphoto from "/space-tourism-website-main/starter-code/assets/crew/image-mark-shuttleworth.png"
import anoushephoton from "/space-tourism-website-main/starter-code/assets/crew/image-anousheh-ansari.png"

const Crew = () => {
    return (
        <section className={styles.crew_section}>
            <Navbar/>

            <article>

            <Carousel fade style={{marginTop:"6rem"}}>
        <Carousel.Item className={styles.cardcrew}>
        <h3>
            <span>02</span> MEET YOUR CREW
        </h3>
        <p className={styles.infoo}>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.</p>
        <img
          className={styles.imgslide}
          src={victorphoto}
          alt="pilot victor"
        />
        <Carousel.Caption>
        <div className={styles.datecrew}>
        <small>PILOT</small>
        <p>VICTOR GLOVER</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <h3>
            <span>02</span> MEET YOUR CREW
        </h3>
        <p className={styles.infoo}>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
        <img
          className={styles.imgslide}
          src={markphoto}
          alt="mark photo"
        />

        <Carousel.Caption>
        <div className={styles.datecrew}>
        <small>MISSION SPECIALIST</small>
        <p>MARK SHUTTLEWORTH</p>
        </div>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <h3>
            <span>02</span> MEET YOUR CREW
        </h3>
       <p className={styles.infoo}>
          Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.
        </p>
        <img
          className={styles.imgslide}
          src={douglaphoto}
          alt="dougla photo"
        />

        <Carousel.Caption> 
        <div className={styles.datecrew}>
        <small>COMMANDER</small>
        <p>DOUGLAS HURLEY</p>
        </div>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <h3>
            <span>02</span> MEET YOUR CREW
        </h3>
        <p className={styles.infoo}>
          Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.
        </p>
        <img
          className={styles.imgslide}
          src={anoushephoton}
          alt="anousphoto"
        />

        <Carousel.Caption>
        <div className={styles.datecrew}>
        <small>FLIGHT ENGINNER</small>
        <p>ANOUSHEH ANSARI</p>
        </div>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

            </article>

        </section>
    );
};

export default Crew;
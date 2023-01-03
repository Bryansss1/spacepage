import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from "../styles/Destination.module.scss"
import Carousel from 'react-bootstrap/Carousel';
import Navbar from '../components/Navbar';
import moon from "/space-tourism-website-main/starter-code/assets/destination/image-moon.png"
import titan from "/space-tourism-website-main/starter-code/assets/destination/image-titan.png"
import marte from "/space-tourism-website-main/starter-code/assets/destination/image-mars.png"
import europa from "/space-tourism-website-main/starter-code/assets/destination/image-europa.png"
const Destination = () => {

const [planets,setPlantes]=useState({})

useEffect(()=>{
axios.get("/space-tourism-website-main/starter-code/data.json")
.then(res=>setPlantes(res.data))
},[])
console.log(planets)

    return (
        <section className={styles.destination_section}>
          <Navbar/>
<Carousel style={{marginTop:"8rem"}}>
      <Carousel.Item interval={1000}>

      <h2>
       <span className={styles.title_span}>01</span> PICK YOUR DESTINATION
      </h2>

      <ul className={styles.list_km}>
        <li> 
             <span>Avg. distance</span>
             <p>628 mil. km</p>
        </li>
        <li>
             <span>Est. travel time</span>
             <p>3 years</p>
        </li>
      </ul>

        <img
          className={styles.images_destination}
          src={europa}
          alt="First slide"
        />
        <Carousel.Caption>
        <div className={styles.dive}>
          <h3>{planets.destinations?.[2].name}</h3>
          <p className={styles.info}>
          {planets.destinations?.[2].description}
          </p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <h2>
       <span className={styles.title_span}>01</span> PICK YOUR DESTINATION
      </h2>
      <ul className={styles.list_km}>
        <li> 
             <span>Avg. distance</span>
             <p>225 mil. km</p>
        </li>
        <li>
             <span>Est. travel time</span>
             <p>9 months</p>
        </li>
        </ul>
        <img
          className={styles.images_destination}
          src={marte}
          alt="Second slide"
        />
        <Carousel.Caption>
        <div className={styles.dive}>
          <h3>{planets.destinations?.[1].name}</h3>
          <p className={styles.info}>
          {planets.destinations?.[1].description}
          </p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <h2>
       <span className={styles.title_span}>01</span> PICK YOUR DESTINATION
      </h2>
      <ul className={styles.list_km}>
        <li> 
             <span>Avg. distance</span>
             <p>384,400 km</p>
        </li>
        <li>
             <span>Est. travel time</span>
             <p>3 days</p>
        </li>
        </ul>
        <img
          className={styles.images_destination}
          src={moon}
          alt={planets.destinations?.[0].description}
        />
        <Carousel.Caption>
        <div className={styles.dive}>
          <h3>{planets.destinations?.[0].name}</h3>
          <p className={styles.info}>
          {planets.destinations?.[0].description}
          </p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <h2>
       <span className={styles.title_span}>01</span> PICK YOUR DESTINATION
      </h2>
      <ul className={styles.list_km}>
        <li> 
             <span>Avg. distance</span>
             <p>1.6 bil. km</p>
        </li>
        <li>
             <span>Est. travel time</span>
             <p>7 years</p>
        </li>
        </ul>
        <img
          className={styles.images_destination}
          src={titan}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>{planets.destinations?.[3].name}</h3>
          <p className={styles.info}>
          {planets.destinations?.[3].description}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </section>
    );
};

export default Destination;
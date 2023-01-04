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
          <h3>EUROPA</h3>
          <p className={styles.info}>
          The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.
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
          <h3>MARS</h3>
          <p className={styles.info}>
          Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!
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
          alt="See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
        />
        <Carousel.Caption>
        <div className={styles.dive}>
          <h3>MOON</h3>
          <p className={styles.info}>
          See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
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
          alt="TITAN"
        />
        <Carousel.Caption>
          <h3>TITAN</h3>
          <p className={styles.info}>
          The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </section>
    );
};

export default Destination;
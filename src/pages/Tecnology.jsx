import React, { useEffect, useState } from 'react';
import styles from "/src/styles/Tecnology.module.scss"
import Navbar from '../components/Navbar';
import launchphoto from "/space-tourism-website-main/starter-code/assets/technology/image-launch-vehicle-landscape.jpg"
import spaceport from "/space-tourism-website-main/starter-code/assets/technology/image-spaceport-landscape.jpg"
import spacecapsule from "/space-tourism-website-main/starter-code/assets/technology/image-space-capsule-landscape.jpg"
const Tecnology = () => {
const [firsr,setFirst]=useState(1)
const [second,setSecond]=useState(0)
const [trete,settree]=useState(0)

const clickfirst=()=>{
    setFirst(1)
    setSecond(0)
    settree(0)
}
const clicksecond=()=>{
    setFirst(0)
    setSecond(2)
    settree(0)
}
const clicktree=()=>{
    setFirst(0)
    setSecond(0)
    settree(3)
}

    return (
        <section className={styles.tecnology_section}>
            <Navbar/>
            <h2><span>03</span> SPACE LAUNCH 101</h2>
            {firsr ===1 ?(
            <article className={styles.tecno_arti}>
                <img src={launchphoto} alt="photo launch" className={styles.imgdiv1}/>
                
            <div className={styles.divbuttons}> 
                <button style={{background:"white",color:"black"}} onClick={clickfirst}>1</button>
                <button onClick={clicksecond}>2</button>
                <button onClick={clicktree}>3</button>
            </div>

            <div className={styles.info_tec}>
                <h3>THE TERMINOLOGY...</h3>
                <h4>LAUNCH VEHICLE</h4>
                <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
            </div>
            </article> 
                
            
            ):second===2?(
            <article className={styles.tecno_arti2}>
                <img src={spaceport} alt="photo port" className={styles.imgdiv1}/>

            <div className={styles.divbuttons}>
                <button onClick={clickfirst}>1</button>
                <button style={{background:"white",color:"black"}} onClick={clicksecond}>2</button>
                <button onClick={clicktree}>3</button>
            </div>

            <div className={styles.info_tec}>
                <h3>THE TERMINOLOGY...</h3>
                <h4>SPACEPORT</h4>
                <p>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>
            </div>
            </article>
            ):trete===3?(
            <article className={styles.tecno_arti3}>
                <img src={spacecapsule} alt="photo capsule" className={styles.imgdiv1}/>

            <div className={styles.divbuttons}>
                <button onClick={clickfirst}>1</button>
                <button onClick={clicksecond}>2</button>
                <button style={{background:"white",color:"black"}} onClick={clicktree}>3</button>
            </div>

            <div className={styles.info_tec}>
                <h3>THE TERMINOLOGY...</h3>
                <h4>SPACE CAPSULE</h4>
                <p>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
            </div>
            </article>
            ):""}
           
        </section>
    );
};

export default Tecnology;
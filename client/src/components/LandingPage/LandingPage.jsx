import React from "react";
import styles from "./LandingPage.module.css";
import { Link } from "react-router-dom";
// import { FaPaw } from "react-icons/fa";
// import { CgPushChevronRight } from "react-icons/cg";

import huella from "../../assets/Huella.png";
import login from "../../assets/Login.png";

import "animate.css";

const LandingPage = () => {
  return (
  
    <section id={styles.container}>
  
      <div className={styles.izquierda}>
        <Link to="/home" className={styles.link}>
          <div className={styles.elem}>
        
           <img src={huella} alt="huella icon" className={styles.icon} />
              <h1 className={styles.h1} >Let's start!</h1> 
              <img src={login} alt="huella icon" className={styles.icon} />
            {/* <className={`${styles.icon2} ${styles.union}`*/}
          </div>
        </Link>
      </div>

      <div className={styles.derecha}></div>
      
    </section>
 
  );
};

export default LandingPage;

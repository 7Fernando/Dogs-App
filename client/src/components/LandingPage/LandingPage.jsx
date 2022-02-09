import React from "react";
import styles from "./LandingPage.module.css";
import { Link } from "react-router-dom";
import { FaPaw } from "react-icons/fa";
import { CgPushChevronRight } from "react-icons/cg";
//import d from "../../components/assets/d.mp4";
//import agua from "../assets/agua.png";

import "animate.css";

const LandingPage = () => {
  return (
    <section id={styles.container}>
      <div className={styles.izquierda}>
        
        <Link to="/home" className={styles.link}>
          <FaPaw className={`${styles.icon} ${styles.union}`} />
          <div className={styles.conH1}>
            <h1 className={`${styles.h1} ${styles.union}`} >Let's start!</h1>
            <CgPushChevronRight className={`${styles.icon2} ${styles.union}` } />
          </div>

          
        </Link>
        
      </div>

      <div className={styles.derecha}></div>
    </section>
  );
};

export default LandingPage;

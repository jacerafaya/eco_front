
const img3 = new URL("../../../../public/assets/puissance.png", import.meta.url);
import styles from "./Progress.module.css";
import CountUp from "react-countup";
import {useInView} from 'react-intersection-observer';

export default function CircleProgress({ id, title, number}) {
  
   const { ref: myRef, inView: myElementIsVisible } = useInView();
   const { ref: magicSectionRef, inView: magicSectionIsVisible } = useInView();    return (
  
       <div  className={styles.body}>
        <div className={styles.skill}>
         <div className={styles.outer}>
         <div className={styles.inner}>
          <div ref={myRef}  >{ myElementIsVisible ? <CountUp className={styles.counter} end={number} duration={1}/> : 'No 🙈' }
            </div>
          
         </div>
         </div>
           
         <svg ref={magicSectionRef} className={styles.svg} xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stopColor="#e91e63" />
               <stop offset="100%" stopColor="#673ab7" />
            </linearGradient>
         </defs>
         <circle className={`${styles.circlenotanim} ${magicSectionIsVisible ? styles.circle : ''}`} cx="80" cy="80" r="70" strokeLinecap="round" />
     </svg>
     <div className={styles.img_title}>
        <h5 className={styles.title_counter}>{title}</h5>
        </div>
        </div>
        </div>
    );
  }
import styles from "./Progress.module.css";
import CircleProgress from "./circleProgress";
import UseGetWindowSize from "../utils/UseGetWindowSize";
import { useState, useEffect, useRef } from "react";

export default function Progress() {
  const size = UseGetWindowSize();
  const PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL = "https://www.ecosolution.tn/api/back";
  const [indicateur, setIndicateur] = useState([]);

  useEffect(() => {
      fetch(`${PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL}/indicateur`)
          .then((response) => response.json())
          .then((data) => {
              console.log("hedhi idata indicateur", data);
              setIndicateur(data);
          })
          .catch((error) => console.log(error));
  }, []);
  const indicateurCarbone = parseFloat(indicateur[0]?.indicateurCarbone);
  const  indicateurPuissance = parseFloat(indicateur[0]?.indicateurPuissance);
  const  indicateurNombreDeProjet = parseFloat(indicateur[0]?.indicateurNombreDeProjet);
  const items = [
    
    {
        id: "1",
        title:  <span className={styles.item_title}>Indicateur carbone CO2</span>,
        number: indicateurCarbone,
       
    },
    {
        id: "2",
        title: <span className={styles.item_title}>Puissance installée en KWC</span>,
        number: indicateurPuissance,
  

    },
    {
        id: "3",
        title: <span className={styles.item_title}>Nombre de Projets</span>,
        number: indicateurNombreDeProjet,
       

    },



]
  if (size.width <1000) {
    return(
        <div className={styles.container}>
      <h1 className={styles.first_title_mobile} >Offrir de meilleurs résultats à nos clients</h1>
      <div className={styles.counter_container_mobile}>   
      {items.map((element, key) => <CircleProgress key={key} id={element.id} title={element.title} number={element.number}  />)}
         
        </div>
        </div>
    );
  }

    return (
      <div className={styles.container}>
      <div className={styles.first_title} >Offrir de meilleurs résultats à nos clients</div>
      <div className={styles.counter_container}>   
      {items.map((element, key) => <CircleProgress key={key} id={element.id} title={element.title} number={element.number}  />)}
         
        </div>
        </div>
    );
  }
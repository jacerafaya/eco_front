import Projet1 from "./Projet1";
import styles from "./Projet.module.css"
import { useState, useEffect } from "react";
import Link from "next/link";
export default function Projets() {
  const [projetCardsContent, setProjetCardsContent] = useState([]);
  const PROTOCOLANDHOSTNAMEPARTOFTHEURL = "https://www.ecosolution.tn/api/back";
  const PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL = "https://www.ecosolution.tn/api/back";
  const [projets, setProjets] = useState([]);
  useEffect(() => {
    fetch(`${PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL}/projets`)
      .then((response) => response.json())
      .then((data) => {
        console.log("hedhi idata", data);
        setProjets(data);
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    fetch(PROTOCOLANDHOSTNAMEPARTOFTHEURL + "latestProjets")
      .then((response) => response.json())
      .then((data) => {
        setProjetCardsContent(data);
        console.log(projetCardsContent);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
    <div className={styles.container} >
          <div>
            {projets.map((element, key) => (
              <Projet1
                key={key}
                id={element._id}
                titre={element.titre}
                adresse={element.adresse}
                description={element.description}
                productionAnuelle={element.productionAnuelle}
                type={element.type}
                video={element.video}
                img={`${PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL}/imagesProjet/${element.images[0]}`}
              />
            ))}
          </div>
          </div>
          <div className="container-fluid d-flex justify-content-center">
            <Link href="../../ProjetRefPage">
              <button className="blog-button  ">voir tous les projets</button>
            </Link>
          </div>
        
      </div> 
  );
}

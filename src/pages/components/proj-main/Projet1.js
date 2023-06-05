import styles from "./Projet.module.css";
export default function Projet1({
  id,
  titre,
  description,
  adresse,
  video,
  productionAnuelle,
  type,
  img,
}) {
  return (
    <div className={styles.cardBlog}>
      <div className="card-body">
      <img className={styles.cards_img} src={img} />
      <h1 className={styles.card_title}>{titre}</h1>
      <h2 className={styles.card_title}>adresse :{adresse}</h2>
      <p className={styles.card_text} >{description}</p>
       
      </div>
    </div>
  );
}

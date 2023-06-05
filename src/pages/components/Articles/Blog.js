import styles from "./Blog.module.css";
export default function Blog({ titre, description, contenu, image }) {
  return (
      <div className={styles.cardBlog }>
      <div className="card-body ">
      <img className={styles.cards_img} src={image} />
        <h4 className={styles.card_title}>{titre}</h4>
        <p className={styles.card_text} >{description}</p>
        <p className={styles.card_text} >{contenu}</p>
        </div>
      </div>
   
  );
}

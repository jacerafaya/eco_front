import { useEffect, useState } from "react";
import Article from "./article";
import Layout from "@/pages/layout";

export default function Articles() {
    const [articles,setArticles] = useState([]);
    const PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL = 'https://www.ecosolution.tn/api/back'
    
    useEffect(() => {
        fetch(`${PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL}/articles`)
            .then(response => response.json())
                .then(data=>{
                console.log('hedhi idata', data);
                    setArticles(data);
                }).catch(error=>console.log(error));
    }, [])

    return (
        <Layout>
        <div className="articles-container">
            <div className="articles">
                {articles.map((element, key) => <Article key={key} id={element._id} title={element.titre} content={element.contenu} image={`${PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL}/imagesArticle/${element.images[0]}`} />)}

            </div>
        </div>
        </Layout>
    )
}

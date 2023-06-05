import { useEffect, useState } from "react";
import { useRouter, withRouter } from "next/router";
import { itemS } from "./itemS";
export default function ServiceElement() {
  const [services, setServices] = useState([]);
  const router = useRouter();
  const PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL = "https://www.ecosolution.tn/api/back";

  useEffect(() => {
    fetch(`${PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL}/services`)
      .then((response) => response.json())
      .then((data) => {
        console.log("hedhi idata", data);
        setServices(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {services.map((item, index) => {
        return (
          <div
            key={index}
            className="container-article ">
            <div className="row justify-content-center">
              <div className="column1-article">
                <img
                  className="article-image"
                  src={`${PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL}/imageService/${item.image}`}></img>
              </div>
              <div className="column2-article">
                <h4 className="titre-article">{item.titre}</h4>
                <p>{item.description}</p>

                <div className="button-article-container">

                
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

import { useParams } from "react-router-dom";
import Styles from "./deteil.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Detail() {
  const [detail, setDatail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getproductDetail = async () => {
      try {
        const { data } = await axios.get(
          `https://express-crud-three.vercel.app/api/products/${id}`
        );
        setDatail(data.product);
      } catch (error) {
        console.log(error);
      }
    };
    getproductDetail();
  }, []);
  return (
    <div className={Styles.detail}>
      <div className="container">
        <div className={Styles.detailContainer}>
          <img src={detail.image} alt={detail.title} />
          <div className={Styles.detailInfo}>
            <h1>{detail.title}</h1>
            <p>{detail.description}</p>
            <h4>${detail.price}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;

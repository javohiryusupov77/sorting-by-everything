import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Products.module.scss";

const baseURL = import.meta.env.VITE_BASE_URL;

const Product = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProductById() {
      const response = await fetch(`${baseURL}/products/${productId}`);
      const data = await response.json();
      setProduct(data);
    }

    fetchProductById();
  }, [productId]);

  return (
    <div className={styles.product}>
      {product && (
        <>
          <h2>{product.name}</h2>
          <img src={product.image_url} alt={product.name} />
          <p>{product.description}</p>
          <p className={styles.price}>Price: ${product.price}</p>
          <p className={styles.category}> Brand{product.brand_name}</p>
          <div className={styles.productDetails}>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;

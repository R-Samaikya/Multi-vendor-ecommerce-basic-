import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import API from "../services/api";

function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      console.log(products);
  }, []);


  return (
    <div>

      <h1>Multi Vendor Ecommerce</h1>

      <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "25px",
    padding: "30px"
  }}
>

        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}

      </div>

    </div>
  );
}

export default Home;
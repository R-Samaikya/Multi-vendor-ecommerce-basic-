import { useContext } from "react";
import { CartContext } from "../context/CartContext";
function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    
    <div
      style={{
        width: "220px",
        background: "white",
        borderRadius: "15px",
        padding: "15px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        textAlign: "center",
        transition: "0.3s"
      }}
    >

      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "150px",
          height: "150px",
          objectFit: "contain"
        }}
      />

      <h3
        style={{
          fontSize: "18px",
          marginTop: "10px"
        }}
      >
        {product.name}
      </h3>

      <h2
        style={{
          color: "green"
        }}
      >
        ₹{product.price}
      </h2>

      <p>
        🏪 {product.vendor}
      </p>

      <button
  onClick={() => addToCart(product)}
  style={{
    width: "100%",
    padding: "10px",
    border: "none",
    borderRadius: "8px",
    background: "#222",
    color: "white",
    cursor: "pointer"
  }}
>
  Add to Cart

        

        
      </button>

    </div>
  );
}

export default ProductCard;
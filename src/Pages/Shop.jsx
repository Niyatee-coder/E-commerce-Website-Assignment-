import { useEffect, useState } from "react";
import supabase from "../supabase";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const { data, error } = await supabase
      .from("products")
      .select("*");

    if (!error) {
      setProducts(data);
    }
  }

  function addToCart(product) {
    setMessage("Added to cart ✅");

    setTimeout(() => {
      setMessage("");
    }, 2000);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f0225",
        padding: "40px",
      }}
    >
      {message && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            backgroundColor: "green",
            color: "white",
            padding: "12px 20px",
            borderRadius: "8px",
            fontWeight: "bold",
            zIndex: 9999,
          }}
        >
          {message}
        </div>
      )}
    
      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
          color: "#ffffff",
          fontSize: "42px",
          fontWeight: "bold",
          letterSpacing: "2px",
        }}
      >
        Fashion Factory
      </h1>

      <div
        className="product-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: "30px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              background: "#ffffff",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              transition: "0.3s",
              textAlign: "center",
              paddingBottom: "20px",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "280px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h2
                style={{
                  marginBottom: "10px",
                  color: "#000000",
                  fontSize: "24px",
                }}
              >
                {product.name}
              </h2>

              <h3
                style={{
                  color: "#000000",
                  marginBottom: "20px",
                  fontSize: "22px",
                }}
              >
                ₹{product.price}
              </h3>

              <button className="button" onClick={() => addToCart(product)}>
                Add to Cart 🛒
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
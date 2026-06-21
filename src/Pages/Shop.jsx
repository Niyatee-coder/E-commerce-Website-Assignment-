import { useState } from "react";

export default function Shop() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 1999,
      image: "https://www.portronics.com/cdn/shop/files/Portronics_Muff_M3_best_headphones_under_5000.jpg?v=1744893854",
      
    }
    ,{
      id: 2,
      name: "Smart Watch",
      price: 2999,
      image: "https://www.lapcare.com/cdn/shop/files/GoldFitso3.jpg?v=1757325592&width=2048",
      
    },
    {
      id: 3,
      name: "Running Shoes",
      price: 2499,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnaamraug-lsORM9FtvplmoxNce1C_dj02A8W7hZEjI5Vk1k6G5rlMMN5l&s=10",
      
    }
    ,{
      id: 4,
      name: "Salwaar Suit",
      price: 1299,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgKHe5sxSeLDWSa6KlaF9J25s8Py963RP3NqpsX9w96g&s=10",
      
    }
    ,{
      id: 5,
      name: "Jeans",
      price: 1200,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo9DJMVaEDVBrA__Z42gNlOwMRb9zeJvPtJiNzc1yf9w&s=10",
      
    }

    ,{
      id: 6,
      name: "Top",
      price: 999,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2g3q7ded1WEcqGDZAd56vPC8BnzAGDORUp1OyMChroQ&s=10",
      
    }

    ,{
      id: 7,
      name: "Flats",
      price: 199,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzs63-FeRT6JhG5-6eZmwL4k_n2URulRfTxjYAs2gDKg&s=10",
      
    }

    ,{
      id: 8,
      name: "Shirt",
      price: 299,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOmErChRbQnoR2OaY0ePLZENOwtQb0vD5bEjVdWPN2tg&s=10",
      
    }
  ];

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="shop-container">
      <center>
        <h1>Shop</h1>
        <br/>
        <input
          type="text"
          placeholder="Search Products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </center>
    </div>
  );
}

export function Products() {
  const products = [
    {
      name: "Classic Jacket",
      price: "1500/-",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfhF9-0ZFBYr5YpowP2FmGzc-MXR1C75rmS12Uku2bPw&s=10",
    },
    {
      name: "Modern Sneakers",
      price: "2500/-",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      name: "Elegant Watch",
      price: "2999/-",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
  ];

  return (
    <section className="products">
      <h2>Featured Products</h2>
      <br/>
      <div className="product-grid">
        {products.map((item, index) => (
          <div className="product-card" key={index}>
            <img
              src={item.image}
              alt={item.name}
              width="400"
              height="400"
            />
            <center>
            <h3>{item.name}</h3>
            
            <p>{item.price}</p>
            
            <a href="#checkout"><button>Buy Now</button></a>
            </center>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;

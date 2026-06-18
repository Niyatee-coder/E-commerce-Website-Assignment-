export function Products() {
  const products = [
    {
      name: "Classic Jacket",
      price: "1500/-",
      image:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518",
    },
    {
      name: "Modern Sneakers",
      price: "2500/-",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      name: "Elegant Watch",
      price: "4000/-",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
  ];

  return (
    <section className="products">
      <h2>Featured Products</h2>

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

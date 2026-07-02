import { useState } from "react";
import supabase from "../supabase";

export default function Admin() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  async function addProduct(e) {
    e.preventDefault();

    const { error } = await supabase.from("products").insert([
      {
        name,
        price: Number(price),
        image,
      },
    ]);

    if (error) {
      alert(error.message);
    } else {
      alert("Product Added!");

      setName("");
      setPrice("");
      setImage("");
    }
  }

  return (
    <form onSubmit={addProduct}>
      <input
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <button type="submit">Add Product</button>
    </form>
  );
}
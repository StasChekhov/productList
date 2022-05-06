import { useEffect, useState } from "react";
// import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import { v4 as uuidv4 } from "uuid";
import Modal from "./components/Modal";

function App() {
 const [products, setProducts] = useState(() => {
  return (
   JSON.parse(window.localStorage.getItem("products")) ?? [
    {
     id: 1,
     name: "Bred",
     count: 4,
     weight: "200g",
    },
   ]
  );
 });
 const [filter, setFilter] = useState("");

 useEffect(() => {
  window.localStorage.setItem("products", JSON.stringify(products));
 }, [products]);

 const onAddProduct = (name, count, weight) => {
  if (onCheckProduct(name)) {
   alert(`${name} is already in list`);
   return;
  }
  const obj = { id: uuidv4(), name, count, weight };
  setProducts([...products, obj]);
 };

 const onCheckProduct = (value) => {
  return products.find((el) => el.name.toUpperCase() === value.toUpperCase());
 };

 const onFiltering = products.filter((el) =>
  el.name.toUpperCase().includes(filter.toUpperCase())
 );
 const onDelete = (id) => {
  setProducts(products.filter((el) => el.id !== id));
 };

 //  const alphabetFilter = products.sort((a, b) => a.name.localeCompare(b.name));

 return (
  <div>
   {/* <Header /> */}
   <Modal onAddProduct={onAddProduct} />
   {/* <button type="button" onClick={() => alphabetFilter}>
    Alphabet
   </button> */}
   <ProductsList listProducts={onFiltering} onDelete={onDelete} />
  </div>
 );
}

export default App;

import { useState } from "react";
import s from "./components.module.css";

export default function Modal({ onAddProduct }) {
 const [name, setName] = useState("");
 const [count, setCount] = useState("");
 const [weight, setWeight] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();
  onAddProduct(name, count, weight);
  setName("");
  setCount("");
  setWeight("");
 };
 return (
  <>
   <header className={s.header}>
    <form className={s.form} onSubmit={handleSubmit}>
     <label className={s.label}>
      <span className={s.span}>Name:</span>
      <input
       type="text"
       name="name"
       value={name}
       onChange={(e) => {
        setName(e.target.value);
       }}
      />
     </label>
     <label className={s.label}>
      <span className={s.span}>Count:</span>
      <input
       type="text"
       name="count"
       value={count}
       onChange={(e) => {
        setCount(e.target.value);
       }}
      />
     </label>
     <label className={s.label}>
      <span className={s.span}>Weight(g):</span>
      <input
       type="text"
       name="weight"
       value={weight}
       onChange={(e) => {
        setWeight(e.target.value);
       }}
      />
     </label>
     <button type="submit">Add product</button>
    </form>
   </header>
  </>
 );
}

import React from "react";
import s from "./components.module.css";

export default function ProductsItem({ id, name, count, weight, onDelete }) {
 return (
  <div className={s.container}>
   <span>{name}</span>
   <span>{count}</span>
   <span>{weight}g</span>
   <button
    type="button"
    onClick={() => {
     onDelete(id);
    }}
   >
    X
   </button>
  </div>
 );
}

import React from "react";
import ProductsItem from "./ProductsItem";
import s from "./components.module.css";

export default function ProductsList({ listProducts = [], onDelete }) {
 return (
  <div>
   <ul>
    {listProducts.map((element) => (
     <li className={s.listProducts_li} key={element.id}>
      <ProductsItem
       id={element.id}
       name={element.name}
       count={element.count}
       weight={element.weight}
       onDelete={onDelete}
      />
     </li>
    ))}
   </ul>
  </div>
 );
}

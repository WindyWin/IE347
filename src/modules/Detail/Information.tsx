import React from 'react';
import { initial_products } from "./Data";
export default function Information() {
  return (

    <div>
      <p id='information_title'>{initial_products.name}</p>
      <br />
      {initial_products.information}
    </div>


  )
}

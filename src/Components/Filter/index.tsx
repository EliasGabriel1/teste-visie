// import { useState } from 'react';
import ProductCard from "../Product/ProductCard";
import "./filter.css";

interface Props {
  data: any;
}

const Filter = ({ data }: Props) => {
  return (
    <div className='container'>
      <div>
        <div className='d-flex wrap'>
          {data.products.map((product:any) => (
            <ProductCard key={product.index} item={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;

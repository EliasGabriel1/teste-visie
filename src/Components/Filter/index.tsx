import { useState } from 'react';
import ProductCard from "../Product/ProductCard";
import "./filter.css";
// import { Product } from "../types";

interface Props {
//   data: Product[];
  data: any;
}

const Filter = ({ data }: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const filteredProducts = data.products.filter((product:any) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value ?? "");
  };

  return (
    <div className='container'>
      <div className='d-grid'>
        <div className='filter'>
          {
            <div>
              <input
                type="checkbox"
                className='checkbox'
                id="todos"
                name="todos"
                value=""
                onChange={handleSearchTermChange} />
              <label htmlFor="todos">Todos Produtos</label>
            </div>
          }
          {
            data.products.map((item:any) => {
              return (
                <div key={item.index}>
                  <input
                    type="checkbox"
                    className='checkbox'
                    id={item.productId}
                    name={item.productId}
                    value={item.title.substr(0, 12)}
                    onChange={handleSearchTermChange} />
                  <label htmlFor={item.productId}>{item.productName}</label>
                </div>
              )
            })
          }
        </div>

        <div className='d-flex wrap'>
          {filteredProducts.map((product:any) => (
            <ProductCard key={product.index} item={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;

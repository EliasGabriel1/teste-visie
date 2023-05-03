items apagados que podem ser usados futuramente:


# filter:


// import { useState } from 'react';
import ProductCard from "../Product/ProductCard";
import "./filter.css";

interface Props {
  data: any;
}

const Filter = ({ data }: Props) => {
  // const [searchTerm, setSearchTerm] = useState<string>("");
  // const filteredProducts = data.products.filter((product:any) =>
  //   product.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  // const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchTerm(event.target.value ?? "");
  // };

  return (
    <div className='container'>
      <div>
        {/* <div className='filter'>
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
        </div> */}

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



# Página de produto:


import React, { useContext,useState } from "react";
import { AppContext } from "../../Context/AppContext";
import Loading from "../../Components/Loading";
// import Vitrine from "../../Components/Vitrine";
import Description from "../../Components/Product/Description";
import Footer from "../../Components/Footer";
import "./product.css";
import { useNavigate } from "react-router-dom";

function ProductPage(props: any): JSX.Element {
    const { addItemToCart, addFav } = useContext(AppContext);
    const { Product } = useContext(AppContext);
    const [background, setBackground] = useState("white");


    const productItem: any = [
        {
            "productName": Product[0].productName,
            "productBrand": Product[0].productBrand,
            "productDescription": Product[0].productDescription,
            "imageProduct": Product[0].thumbnail,
            "thumbnail": Product[0].images,
            "flags": Product[0].flags,
            "ListPrice": Product[0].ListPrice,
            "Price": Product[0].Price,
            "quantidade":1
        }
    ]

    const navigate = useNavigate();

    const voltarhome = () => {
        navigate("/");
    };
    
    const favoreitei = ()=>{
        addFav(Product[0].productId)
        setBackground("#000")
    }

    // if (!errorvitrineUm && !errorvitrineDois) {

    return (
        <>
            <button onClick={() => voltarhome()}>Voltar a página anterior</button>
            {Product.length > 0 ?
                <>
                    <div className="container">
                        <div className="ProductContainer">
                            <div className="ProductsImage">
                                <img width="100%" alt="" src={Product[0].imageProduct} />
                            </div>
                            <div className="ProductsDescript">
                                <span className="Card__favorite" style={{ background: background }} onClick={() => {  favoreitei()}}>
                                    ❤
                                </span>
                                <p>{Product[0].productBrand}</p>
                                <h1>{Product[0].productName}</h1>
                                <p className="Price">{Product[0].Price}</p>
                                <p className="ListPrice">{Product[0].ListPrice}</p>
                                <button onClick={() => addItemToCart(productItem)}>Adicionar ao carrinho</button>
                            </div>
                        </div>
                        <div className="Description">
                            <Description description={Product[0].productDescription} />
                        </div>
                    </div>
                </>
                : <Loading type="spinningBubbles" color="black" />
            }

            {/* {!loadingvitrineUm === true ?
                    <Vitrine data={vitrineUm} />
                    : <Loading type="spinningBubbles" color="black" text="UNA PRENDA PARA CADA OCASIÓN" />}

                {!loadingvitrineDois === true ?
                    <Vitrine data={vitrineDois} />
                    : <Loading type="spinningBubbles" color="black" text="UNA PRENDA PARA CADA OCASIÓN" />} */}
            <Footer />
        </>
    )
    // }
    // return <>ERRO!</>
}

export default ProductPage;
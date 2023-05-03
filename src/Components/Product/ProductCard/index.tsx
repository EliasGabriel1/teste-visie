import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../Context/AppContext";
import "./productcard.css";

interface Props {
    item: {
        id: number;
        title: string;
        description: string;
        price: number;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        category: string;
        thumbnail: string;
        images: string[];
    };
}

function ProductCard({ item }: Props) {
    const { addItemToCart, IrAoItem, NovoItem, addFav, fav}: any = useContext(AppContext);
    const [background, setBackground] = useState("#000");

    const navigate = useNavigate();
    const ListPrice = item.price - item.discountPercentage;
    const clusterHighlights = item.discountPercentage;

    const productItem = {
        productId: item.id, 
        productName: item.title,
        productBrand: item.brand,
        productDescription: item.description,
        imageProduct: item.thumbnail,
        thumbnail: item.images,
        ListPrice: ListPrice,
        Price: item.price,
        "quantidade":1,
        installmentOptionsCount: item.discountPercentage,
    }

    const pageProduct = () => {
        NovoItem();
        IrAoItem(productItem);
        navigate("/Producto");
    };

    useEffect(() => {
        fav.map((itemfav:any) => {
            return itemfav === item.id ? setBackground("red") : ""
        })
    })

    const favoreitei = ()=>{
        addFav(item.id)
        setBackground("red")
    }

    return (
        <li className="item-product">

            <div className="Card box-item">

                <div className="Card__link">
                    <span className="Card__flags">
                        {clusterHighlights}
                    </span>

                    <span className="Card__favorite" style={{ color: background }} onClick={() => {  favoreitei()}}>
                        ❤
                    </span>

                    <span className="Card__product-image" onClick={pageProduct}>
                        <img src={item.thumbnail}
                            width="200px" alt={item.brand} />
                    </span>

                </div>

                <div className="Card__product-info">

                    <div className="Card__product-info-link Card__link" onClick={pageProduct}>
                        <span className="Card__product-brand">
                            {item.brand}
                        </span>

                        <span className="Card__product-name">
                            {item.title}
                        </span>

                    </div>

                    <div className="Card__product-price">


                        <span className="Card__product-list-price">{ListPrice}</span>
                        <span className="Card__product-best-price">
                            <strong>{item.price}</strong>
                        </span>

                    </div>

                </div>
                <div className="Card__ver-mais">
                    <button onClick={pageProduct}>
                        ver mais
                    </button>
                </div>
                <div className="Card__comprar">
                    <button className="Card__comprar-button" onClick={() => addItemToCart(productItem)}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.50001 3H3.50001M8.50001 3H9.15437C10.1972 3 10.7186 3 11.0168 3.33308C11.3149 3.66616 11.2573 4.18439 11.1421 5.22086L10.9942 6.55216C10.7591 8.66781 10.6416 9.72564 9.92971 10.3628C9.21781 11 8.14521 11 6.00001 11C3.85481 11 2.78221 11 2.07031 10.3628C1.35842 9.72564 1.24088 8.66781 1.00581 6.55216L0.857884 5.22086C0.742721 4.18439 0.685139 3.66616 0.983259 3.33308C1.28138 3 1.8028 3 2.84565 3H3.50001M8.50001 3C8.50001 1.61929 7.38072 0.5 6.00001 0.5C4.65339 0.5 3.55545 1.56469 3.50205 2.89821C3.50069 2.93197 3.50001 2.96591 3.50001 3"
                                stroke="black"></path>
                            <path
                                d="M9 5C9 5.27614 8.77614 5.5 8.5 5.5C8.22386 5.5 8 5.27614 8 5C8 4.72386 8.22386 4.5 8.5 4.5C8.77614 4.5 9 4.72386 9 5Z"
                                fill="black"></path>
                            <path
                                d="M4 5C4 5.27614 3.77614 5.5 3.5 5.5C3.22386 5.5 3 5.27614 3 5C3 4.72386 3.22386 4.5 3.5 4.5C3.77614 4.5 4 4.72386 4 5Z"
                                fill="black"></path>
                        </svg>
                        Adicionar ao carrinho</button>
                </div>
            </div>
        </li>
    )
}

export default ProductCard
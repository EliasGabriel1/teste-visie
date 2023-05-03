import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../Context/AppContext";
import Loading from "../../Components/Loading";
import Description from "../../Components/Product/Description";
import Footer from "../../Components/Footer";
import "./product.css";
import { useNavigate } from "react-router-dom";

function ProductPage(props: any): JSX.Element {
    const { addItemToCart, addFav, fav } = useContext(AppContext);
    const { Product } = useContext(AppContext);
    const [background, setBackground] = useState("#000");


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
            "quantidade": 1
        }
    ]

    const navigate = useNavigate();

    const voltarhome = () => {
        navigate("/");
    };

    useEffect(() => {
        fav.map((itemfav) => {
            return itemfav === Product[0].productId ? setBackground("red") : ""
        })
    })

    const favoreitei = () => {
        addFav(Product[0].productId)
        setBackground("red");
    }

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
                                <span className="Card__favorite" style={{ color: background }} onClick={() => { favoreitei() }}>
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
            <Footer />
        </>
    )
}

export default ProductPage;
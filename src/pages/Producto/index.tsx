import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import Loading from "../../Components/Loading";
// import Vitrine from "../../Components/Vitrine";
import Description from "../../Components/Product/Description";
import Footer from "../../Components/Footer";
// import "./product.css";

function ProductPage(props: any): JSX.Element {
    const { addItemToCart } = useContext(AppContext);
    const { Product } = useContext(AppContext);
    console.log("coe", Product[0])

    const productItem:any = [
        {
            "productName": Product[0].productName,
            "productBrand": Product[0].productBrand,
            "productDescription": Product[0].productDescription,
            "imageProduct": Product[0].imageProduct,
            "flags": Product[0].flags,
            "ListPrice": Product[0].ListPrice,
            "Price": Product[0].Price,
            "installmentOptionsCount": Product[0].installmentOptionsCount,
            "installmentOptionsValue": Product[0].installmentOptionsValue
        }
    ]

    // if (!errorvitrineUm && !errorvitrineDois) {

        return (
            <>

                {Product.length > 0 ?
                    <>
                        <div className="container">
                            <div className="ProductContainer">
                                <div className="ProductsImage">
                                    <img width="100%" alt="" src={Product[0].imageProduct[0]} />
                                </div>
                                <div className="ProductsDescript">
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
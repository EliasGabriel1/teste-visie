// import { useState, useEffect } from "react";
import Loading from "../../Components/Loading";
import Filter from "../../Components/Filter";
import Footer from "../../Components/Footer";
import useCategoria from "../../Api/categoria";
import Minicart from "../../Components/MiniCart"

function Buscar() {
    const { api, error, loading } = useCategoria()

    console.log(error)

    if (!error) {
        return (
            !loading === true ?
                <>
                    {/* <Filter data={data} loading={loading} error={error}/> */}
                    <Minicart />
                    <Filter data={api} />
                    <Footer />
                </>
                : <Loading type="spinningBubbles" color="black" />
        );
    }
    return <>ERROR SERVER</>
}

export default Buscar;
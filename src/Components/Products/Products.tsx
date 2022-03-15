import AvailableProducts from "./AvailableProducts";
import ProductHeader from "./ProductHeader";
import { Fragment } from "react";

const Products = () => {
    return(
        <Fragment>
            <ProductHeader />
            <AvailableProducts />
        </Fragment>
    );
}

export default Products;
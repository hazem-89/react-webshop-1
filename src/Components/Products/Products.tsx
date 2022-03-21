import AvailableProducts from "./AvailableProducts";
import ProductHeader from "./ProductHeader";
import { Fragment } from "react";
import { Product } from "../../data";

interface Props {
    products: Product[];
}

const Products = (props: Props) => {    
    return(
        <Fragment>
            <ProductHeader />
            <AvailableProducts products={props.products} />
        </Fragment>
    );
}

export default Products;
import Card from '../UI/Card';
import ProductItem from './ProductItem/ProductItem';
import classes from './AvailableProducts.module.css';
import { Product } from '../../data';

interface Props {
  products: Product[];
}

const AvailableProducts = (props: Props) => {  
    const products = props.products; 

    const productsList = products.map(product => (
        <Card key={product.id} image={product.image}>
              <ProductItem
                id={product.id}
                name={product.name}
                brand={product.brand}
                description={product.description}
                price={product.price}
                image={product.image} 
                amount={0}
              />
        </Card>
    ));

    return(
        <section className={classes.products}>
            {productsList}
        </section>
    );
}

export default AvailableProducts;
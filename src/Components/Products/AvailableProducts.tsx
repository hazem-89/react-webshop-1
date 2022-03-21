import Card from '../UI/Card';
import ProductItem from './ProductItem/ProductItem';
import classes from './AvailableProducts.module.css';
import img1 from '../../assets/images/img-1.jpeg';
import img2 from '../../assets/images/img-2.jpeg';
import img3 from '../../assets/images/img-3.jpeg';
import img4 from '../../assets/images/img-4.jpeg';
import img5 from '../../assets/images/img-5.jpeg';
import img6 from '../../assets/images/img-6.jpeg';
import img7 from '../../assets/images/img-7.jpeg';
import img8 from '../../assets/images/img-8.jpeg';
import img9 from '../../assets/images/img-9.jpeg';

export const DUMMY_PRODUCTS = [
    {
      id: 'p1',
      name: 'Chunky sneakers',
      brand: 'New Balance',
      description: `Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex.`,
      price: 799,
      image: img1,
    },
    {
      id: 'p2',
      name: 'Soft sneakers',
      brand: 'Vans',
      description: `Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex.`,
      price: 499,
      image: img2,
    },
    {
      id: 'p3',
      name: 'Streeter Vol. Max',
      brand: 'Nikitoe',
      description: `Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex.`,
      price: 699,
      image: img3,
    },
    {
      id: 'p4',
      name: 'Exo black No.2',
      brand: 'Reuse',
      description: `Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex.`,
      price: 999,
      image: img4,
    },
    {
      id: 'p5',
      name: 'BlendIn sneakers',
      brand: 'Vans',
      description: `Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex.`,
      price: 1099,
      image: img5,
    },
    {
      id: 'p6',
      name: 'Red hot chilli',
      brand: 'New Balance',
      description: `Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex.`,
      price: 899,
      image: img6,
    },
    {
      id: 'p7',
      name: 'HikerMax pro',
      brand: 'Americano',
      description: `Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex.`,
      price: 1299,
      image: img7,
    },
    {
      id: 'p8',
      name: 'SpeedUp',
      brand: 'New Balance',
      description: `Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex.`,
      price: 1099,
      image: img8,
    },
    {
      id: 'p9',
      name: 'balance',
      brand: 'Vans',
      description: `Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex.`,
      price: 699,
      image: img9,
    },
  ];

const AvailableProducts = () => {
    const productsList = DUMMY_PRODUCTS.map(product => (
        <Card image={product.image}>
              <ProductItem
                key={product.id}
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
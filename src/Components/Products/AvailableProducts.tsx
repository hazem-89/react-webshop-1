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
      description: 'New Balance',
      price: 799,
      image: img1,
    },
    {
      id: 'p2',
      name: 'Soft sneakers',
      description: 'Vans',
      price: 499,
      image: img2,
    },
    {
      id: 'p3',
      name: 'Streeter Vol. Max',
      description: 'Nikitoe',
      price: 699,
      image: img3,
    },
    {
      id: 'p4',
      name: 'Exo black No.2',
      description: 'RefuseeX',
      price: 999,
      image: img4,
    },
    {
      id: 'p5',
      name: 'BlendIn sneakers',
      description: 'Finest shoemaker',
      price: 1099,
      image: img5,
    },
    {
      id: 'p6',
      name: 'Red hot chilli',
      description: 'Trexxi',
      price: 899,
      image: img6,
    },
    {
      id: 'p7',
      name: 'HikerMax pro',
      description: 'AmericanShoe',
      price: 1299,
      image: img7,
    },
    {
      id: 'p8',
      name: 'SpeedUp',
      description: 'New Balance',
      price: 1099,
      image: img8,
    },
    {
      id: 'p9',
      name: 'balance',
      description: 'Xesior',
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
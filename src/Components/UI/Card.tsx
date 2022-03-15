import { ReactChild, ReactFragment, ReactPortal } from 'react';
import classes from './Card.module.css';

const Card = (props: { image: any; children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => {
    return(
        <div className={classes.card} style={{backgroundImage: `url(${props.image})`}}>
            {props.children}
        </div>
    );
}

export default Card;
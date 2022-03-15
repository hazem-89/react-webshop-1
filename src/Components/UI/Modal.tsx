import { Fragment, MouseEventHandler, ReactChild, ReactFragment, ReactPortal } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = (props: { onClose: MouseEventHandler<HTMLDivElement> | undefined; }) => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>
};

const ModalOverlay = (props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById('overlays');

const Modal = (props: { onClose: any; children: any; }) => {
    return(
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement!)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement!)}
        </Fragment>
    );
}

export default Modal;
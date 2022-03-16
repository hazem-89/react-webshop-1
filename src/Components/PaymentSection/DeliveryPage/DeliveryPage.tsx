import React, {Fragment} from 'react';
import {useFormik} from 'formik';

import classes from './DeliveryPage.module.css';

import progressbar2 from '../../../assets/images/progressbar-2.png';
import instabox from '../../../assets/images/instabox.png';
import budbee from '../../../assets/images/budbee.png';
import postnord from '../../../assets/images/postnord.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { DeliveryData } from '../../../data';

interface Props {
    savedDeliveryData: (deliveryData: DeliveryData) => void;
}

const DeliveryPage = (props: Props) => {
    const formik = useFormik({
        initialValues: {
            picked: '',
        },
        onSubmit: values => {
            const pickedValues = JSON.parse(values.picked);
            props.savedDeliveryData(pickedValues);
        }
    });

    return(
        <Fragment>
        <div className={classes['checkout-header']}>
            <img src={progressbar2} alt="" />
        </div>
        <form className={classes['delivery-form']} onSubmit={formik.handleSubmit}>
            <div className={classes['form-title']}>
                <h2>Delivery</h2>
            </div>
            <div className={classes['delivery-form-holder']} role='group' aria-labelledby="my-radio-group">
                <div className={classes['del-container']}>
                    <img src={instabox} alt="" />
                    <div className={classes['del-text-container']}>
                        <span className={classes['text-title']}>1-2 days</span>
                        <span className={classes['text-price']}>69:-</span>
                    </div>
                    <input
                        id="instabox"
                        name="picked"
                        type="radio"
                        onChange={formik.handleChange}
                        value={JSON.stringify({
                            delivery: 'instabox', 
                            price: '69',
                            time: '1-2 days',
                        })}
                    />
                </div>

                <div className={classes['del-container']}>
                    <img src={budbee} alt="" />
                    <div className={classes['del-text-container']}>
                        <span className={classes['text-title']}>3-4 days</span>
                        <span className={classes['text-price']}>Free</span>
                    </div>
                    <input
                        id="budbee"
                        name="picked"
                        type="radio"
                        onChange={formik.handleChange}
                        value={JSON.stringify({
                            delivery: 'budbee', 
                            price: '0',
                            time: '3-4 days',
                        })}
                    />
                </div>

                <div className={classes['del-container']}>
                    <img src={postnord} alt="" />
                    <div className={classes['del-text-container']}>
                        <span className={classes['text-title']}>2-3 days</span>
                        <span className={classes['text-price']}>49:-</span>
                    </div>
                    <input
                        id="postnord"
                        name="picked"
                        type="radio"
                        onChange={formik.handleChange}
                        value={JSON.stringify({
                            delivery: 'postnord', 
                            price: '49',
                            time: '2-3 days',
                        })}
                    />
                </div>
            </div>

            <div className={classes['form-btn-container']}>
                <button className={classes['exit-btn']}>EXIT</button>
                <button className={classes['form-btn']} type="submit">
                    <div className={classes['btn-text-separator']}>
                        <span>DELIVERY</span>
                        <ArrowForwardIosIcon style={{fontSize: 20}}/>
                    </div>
                </button>
            </div>
        </form>
    </Fragment>
    );
}

export default DeliveryPage;
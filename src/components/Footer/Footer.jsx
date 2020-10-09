import React from "react";
import styles from './Footer.module.css';
import mumtajImage from '../../images/mumtaj.jpg';

function Footer() {
    return (

        <div className={styles.container}>
            <div className={styles.gud1}>
                <h1>Created by Mumtaj</h1>
                <img
                    src="https://res.cloudinary.com/dznq8efwg/image/upload/c_scale,h_500,w_621/v1557558015/samples/4_eyewvv.jpg"
                    alt="new"
                />
            </div>
            <div className={styles.gud}>
                <img
                    src="https://res.cloudinary.com/dznq8efwg/image/upload/c_scale,h_500,w_604/v1557558015/samples/2_tx7jpg.jpg"
                    alt="new"
                />
            </div>



        </div>

    );
}

export default Footer;
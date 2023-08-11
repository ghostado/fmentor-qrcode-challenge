import React from 'react';
import styles from './QRCode.module.css';
import qrcImg from '../assets/image-qr-code.png';

const QRCode = () => {
    return (
        <div className={styles.container}>
            {/* qrcode image */}
            <img
                className={styles.qrCode}
                src={qrcImg}
                alt="QR Code"
            />

            {/* title */}
            <h2 className={styles.title}>
                Improve your front-end skills by building projects
            </h2>

            {/* description */}
            <p className={styles.description}>
                Scan the QR code to visit Frontend Mentor and
                take your coding skills to the next level
            </p>
        </div>
    );
};

export default QRCode;

import React from "react";
import styles from './Footer.module.css';
import fb from '../../assets/home/facebook.png';
import linkdin from '../../assets/home/linkdin.png';
import insta from '../../assets/home/insta.png';
import { SocialIcon } from 'react-social-icons';

const Footer = () =>{
    return (
        <>
            <div style={{backgroundColor:'#2b2b2b', paddingTop:'89px', paddingBottom:'90px'}}>
                <div className="container" >
                    <div className="row">
                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.logo}>Outline Designs</p>
                            <p className={styles.text}>Bringing your vision to life, one outline at a time </p>
                          
                            <div className={styles.social_logo}>
                            <SocialIcon network="twitter" url="https://twitter.com/DesignsOutline?t=DU_mfSAgeM5OfTYB38mVTg&s=08"  style={{ height: 50, width: 50, p:2}} />
                            <SocialIcon network="facebook" url="https://www.facebook.com/profile.php?id=100072403491575&sk=about"  style={{ height: 50, width: 50 }} />

                            <SocialIcon network="tiktok" url="https://twitter.com/jaketrent"  style={{ height: 50, width: 50 }} />

                            <SocialIcon network="whatsapp" url="https://twitter.com/jaketrent"  style={{ height: 50, width: 50 }} />


                                {/* <img src={fb} alt="fb" className={styles.img}/>
                                <img src={linkdin} alt="in" className={styles.img}/>
                                <img src={insta} alt="insta" className={styles.img}/> */}
                            </div>
                        </div>

                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Services</p>
                            <p className={styles.text}>Architectural Designs</p>
                            <p className={styles.text}>Consultancy</p>
                            <p className={styles.text}>Construction</p>

                        </div>

                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Head Office</p>
                            <p className={styles.text}>Nairobi, Kenya</p>
                            <p className={styles.text}>outlinedesignsltd@gmail.com</p>
                            <p className={styles.text}>(254) 718-275-068</p>
                            <p className={styles.text}>(254) 797-777-169</p>
                            
                        </div>

                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Opening Hours</p>
                            <p className={styles.text}>Mon - Sat : 8:00 - 17:00</p>
                            <p className={styles.text}>Sun : Closed</p>

                        </div>
                    </div>

                </div>
            </div>


            <div style={{backgroundColor: '#2b2b2b', borderTop: 'solid 1px #707070'}}>
                    <p className={styles.bottom}>Copyright © 2023. All right reserved</p>
            </div>
        </>
    )
}
export default Footer;
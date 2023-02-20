import React from "react";
import styles from './Top.module.css';
import img1 from '../../../assets/aboutUs/img1.png';
import img2 from '../../../assets/aboutUs/img2.png';
import img3 from '../../../assets/Mansion/image01.jpeg';

const Top =()=>{
    return(
        <div className={`container overflow-hidden`}>
            {/* <p data-aos='slide-right' className={styles.heading}>About Us</p> */}
            {/* <p data-aos='slide-left' className={styles.subHeading}>Web Development Service</p> */}
            <p data-aos='fade-up' data-aos-offset='80'style={{p:5}} className={styles.content}>Unleash Your Imagination. Transform Your Space with Limitless Possibilities with Outline Design - Where Art Meets Architecture.</p>
        
            <div className={`row ${styles.contain} flex-column-reverse flex-md-row`}>
                <div data-aos='slide-right' className={`col-md-6`}>
                    <p className={styles.about}>About Us</p>
                    <p className={styles.creativity}>Outline Designs</p>
                    <p className={styles.contn}>Welcome to Outline Designs, your trusted construction firm that specializes in providing top-of-the-line architectural and design services. Our team of experts is dedicated to helping you turn your vision into a reality, providing comprehensive services that cater to your unique requirements.

With a wealth of experience and expertise, we are committed to delivering outstanding results that exceed your expectations. Whether you need a simple renovation or a complex construction project, we have the resources and knowledge to make it happen.

At Outline Designs, we pride ourselves on our commitment to quality, professionalism, and customer satisfaction. We believe that great architecture is not just about aesthetics, but it should also be functional, practical and sustainable.</p>
                </div>
                <div data-aos='slide-left' data-aos-offset='50' className={`col-md-6 ${styles.imgContain}`}>
                    <img src={img1} alt="" className={styles.img1}/>
                </div>
            </div>
            {/* <div data-aos='fade-up' className='row' style={{textAlign:'left'}}>
                <div className={`col-md-6`}> 
                    <img src={img2} alt="" className={styles.img2}/>
                </div>
            </div> */}
        </div>
    )
}

export default Top;
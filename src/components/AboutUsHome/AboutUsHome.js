import React from "react";
import styles from './AboutUsHome.module.css';
import img1 from '../../assets/home/about1.png';
import img2 from '../../assets/home/about2.png';
import img3 from '../../assets/home/about3.png';
import img101 from "../../assets/Mansion/image01.jpeg"
import img102 from "../../assets/Mansion/image02.jpeg"
import img103 from "../../assets/Mansion/image03.jpeg"

const AboutUsHome = () =>{
    return(
        <>
            <div className={`container ${styles.contain}`}>
                <div className="row overflow-hidden">
                    <div className="col-md-5">
                        <p data-aos="slide-right" className={styles.head}>ABOUT US</p>
                        <p data-aos="slide-left" className={styles.heading}>"Bringing Your Home Vision to Life with Cutting-Edge Architecture"</p>
                        <div data-aos="zoom-in">
                            {/* <p className={styles.content}>Outline Designs is a construction and architectural company that specializes in creating unique and innovative designs for a range of projects, including residential, commercial and public buildings. With a team of experienced professionals and a commitment to sustainability, Outline Designs has a reputation for delivering high-quality projects on time and within budget. Whether working with clients to develop a new building from the ground up or renovating an existing structure, Outline Designs strives to exceed customer expectations and create spaces that are both functional and aesthetically pleasing. </p> */}
                        </div>
                        <div data-aos='zoom-in' style={{textAlign: 'left'}}>
                            <button className={`btn custom_btn ${styles.btn}`}> view</button>
                        </div>
                        
                    </div>

                    <div className="col-md-7 mt-5 overflow-hidden">
                        <div >
                            <div >
                                <img data-aos="zoom-in-right" src={img101} alt="" />
                            </div>
                           
    
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AboutUsHome;
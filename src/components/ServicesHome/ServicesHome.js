import React from "react";
import styles from './ServicesHome.module.css';
import ServiceHome from "../ServiceHome/ServiceHome";
import data from './data';

const ServicesHome = () => {
    return(
        <div className={`container ${styles.contain} overflow-hidden pb-4`}>
                <p data-aos='slide-right' className={styles.heading}>Services</p>
            <div>
                <p data-aos='slide-left' className={`mx-auto ${styles.subHeading}`}>Modernize your workflow and maximize result</p>
            </div>

            <div className="row">
                {
                    data && data.map(x=>(
                        <div key={x.id} className="col-md-4">
                            <ServiceHome id={x.id} heading={x.heading} content={x.content} to={x.to} icon={x.icon}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default ServicesHome;
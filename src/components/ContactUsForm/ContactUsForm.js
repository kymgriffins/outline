import React, { useState,useRef } from "react";
import styles from './ContactUsForm.module.css';
import emailjs from '@emailjs/browser';
// import {Map, GoogleApiWrapper} from 'google-maps-react';

const ContactUsForm = () =>{
    const [formContent, setFormContent ] = useState({});
    const form = useRef();

    // const handleChange = ( event ) =>{
    //     event.preventDefault();
    //     const { value, name } = event.target;

    //     setFormContent(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }))
        

    // }

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_hdkpemi', 'template_609oaaz', form.current, '382Ol5ERxKdjElHsS')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
console.log(formContent);

    return(
        <>
            <div className={`container ${styles.contain} overflow-hidden`}>
                <p data-aos='fade-up' className={`${styles.heading} mx-auto`}>We&apos;d Love to Hear From You</p>

                <div className="row">
                    <div className="col-md-4" data-aos='fade-right'>
                        <p className={styles.head}>Address</p>
                        <p className={styles.content}>Nairobi Kenya</p>
                    </div>

                    <div className="col-md-4" data-aos='fade-up' data-aos-offset='100'>
                        <p className={styles.head}>Contact</p>
                        <p className={styles.content}>Mobile 	: +254 718 275 068</p> 
                        <p className={styles.content}>Phone 	: +254 797 777 169</p>
                        <p className={styles.content}>Email: outlinedesignsltd@gmail.com</p>
                    </div>

                    <div className="col-md-4" data-aos='fade-left' data-aos-offset='70'>
                        <p className={styles.head}>Address</p>
                        <p className={styles.content}>Monday - Saturday: 08:00 - 17:00</p>
                        <p className={styles.content}>Sunday: Closed</p>
                    </div>
                </div>

                <p className={styles.email} data-aos='fade-up'>You can email us</p>
                <form ref={form} onSubmit={sendEmail}>
                <div className="row">
                    <div className="col-md-6" data-aos='fade-right' style={{textAlign: 'left'}}>
                        <label className={styles.label}>Name</label><br/>
                        <input name="name"  className={styles.input} type="text" />

                        <label className={styles.label}>Email</label><br/>
                        <input name="email" className={styles.input} type="email" />

                        <label className={styles.label}>Subject</label><br/>
                        <input name="subject"   className={styles.input} type="text" />
                    </div>

                    <div className="col-md-6" data-aos='fade-left' style={{textAlign: 'left'}}>
                        <label className={styles.label}>Message</label><br/>
                        <textarea name="message"   className={`${styles.input} ${styles.msg}`} type="text"/>
                        <div style={{textAlign:'right'}}>
                            <button className={`btn custom_btn ${styles.btn}`} type="submit">SEND</button>
                        </div>
                    </div>
                </div>
                </form>

            </div>

            {/* <div>
                <Map
                    google={this.props.google}
                    style={{width:'100%', height:'50%'}}
                    zoom={14}
                    initialCenter={
                        {
                            lat: 23.760374,
                            lng: 90.411643
                        }
                    }
                />
            </div> */}
        </>
    )
}

export default ContactUsForm;
import React, { useState, useEffect } from "react";
import emailjs from 'emailjs-com';

const SERVICE_ID = "service_d1xn5zf";
const TEMPLATE_ID = "template_wqlowqs";
const PUBLIC_KEY = "dSpJERPtjN8sefs_8";

function Contact() {
    const [messageStatus, setMessageStatus] = useState(null);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setMessageStatus('success');
            }, (error) => {
                console.log(error.text);
                setMessageStatus('error');
            });
        e.target.reset();
    };

    useEffect(() => {
        if (messageStatus) {
            // Set a timer to hide the alert after 10 seconds
            const timer = setTimeout(() => {
                setMessageStatus(null);
            }, 10000); // 10000 milliseconds = 10 seconds

            // Cleanup the timer if the component unmounts before 10 seconds
            return () => clearTimeout(timer);
        }
    }, [messageStatus]);

    return (
        <div>
            <div id="contact" className="form-1">
                <img className="decoration-star" src="images/decoration-star.svg" alt="alternative" />
                <img className="decoration-star-2" src="images/decoration-star.svg" alt="alternative" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="image-container">
                                <img className="img-fluid" src="images/contact.png" alt="alternative" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-container">
                                <h2>Contact us for a quote using the following form</h2>

                                {messageStatus === 'success' && (
                                    <div className="alert alert-success">
                                        <strong>Success!</strong> Message Sent Successfully.
                                    </div>
                                )}
                                {messageStatus === 'error' && (
                                    <div className="alert alert-danger">
                                        <strong>Error!</strong> Something went wrong.
                                    </div>
                                )}

                                <form onSubmit={handleOnSubmit}>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control-input"
                                            name="from_name"
                                            id="from_name"
                                            placeholder="Enter Your name"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control-input"
                                            name="from_email"
                                            id="from_email"
                                            placeholder="Enter Your Email"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="phone"
                                            className="form-control-input"
                                            name="phone"
                                            id="phone"
                                            placeholder="Enter Your Phone Number"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            className="form-control-textarea"
                                            placeholder="Your message"
                                            name="message"
                                            id="message"
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="form-group">
                                        <button
                                            type="submit"
                                            name="contact"
                                            value="Submit"
                                            className="form-control-submit-button"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

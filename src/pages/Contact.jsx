import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });

        let a = JSON.stringify(formData);
        console.log(a);
    };

    return (
        <div className="contact-container">
            <h2>Get in Touch</h2>
            <p>Feel free to reach out for collaborations or just a chat!</p>

            <div className="contact-info">
                <p><strong>Email:</strong> pakalasrikanth24@gmail.com</p>
                <p><strong>Phone:</strong> +91 99484 66671</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
                <button type="submit">Send Message</button>
            </form>

            {/* Social Media Links with Icons */}
            <div className="social-links">
                <a href="https://instagram.com/srikanth.pakala_"
                    target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37a4 4 0 1 1-4.73-4.73 4 4 0 0 1 4.73 4.73z"></path>
                        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/srikanth-pakala/"
                    target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <rect x="2" y="2" width="20"
                            height="20" rx="5" ry="5"></rect>
                        <path d="M8 11v6M16 11v6M8 8h.01M16 8h.01M12 11v6"></path>
                    </svg>

                </a>
                <a href="https://srikanthpakala.github.io/"
                    target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M9 19c-5 1-5-2-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.78 5.07 5.07 0 0 0-.09-3.83s-1.18-.38-3.91 1.48a13.38 13.38 0 0 0-7 0C6.18.38 5 1.62 5 1.62a5.07 5.07 0 0 0-.09 3.83A5.44 5.44 0 0 0 3.5 9c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.61V22"></path>
                    </svg>
                </a>
            </div>
        </div>
    );
};
export default Contact;

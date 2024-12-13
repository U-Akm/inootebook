import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const About = () => {
    return (
        <div className="container about-container py-5" style={{ backgroundColor: "#001f3f", color: "#f4f4f4" }}>
            <h1 className="text-center mb-4" style={{ color: "#FFD700" }}>About Us</h1>
            <div className="row align-items-center">
                <div className="col-md-6 about-text">
                    <h2 className="about-title mb-3" style={{ borderBottom: "2px solid #FFD700", display: "inline-block" }}>Who We Are</h2>
                    <p className="about-description" style={{ lineHeight: "1.8" }}>
                        We are a passionate team dedicated to delivering high-quality solutions to our clients. With years of experience in the industry, we specialize in creating innovative and user-friendly applications that cater to the unique needs of our customers.
                    </p>
                    <h3 className="about-title mt-4 mb-3" style={{ borderBottom: "2px solid #FFD700", display: "inline-block" }}>Our Mission</h3>
                    <p className="about-description" style={{ lineHeight: "1.8" }}>
                        Our mission is to provide cutting-edge solutions that enable businesses to streamline their operations and reach their full potential. We believe in the power of technology to make a positive impact on the world.
                    </p>
                </div>
                <div className="col-md-6 about-image">
                    <img src="C:\Users\Ubaid Aziz\Downloads\WhatsApp Image 2024-11-25 at 2.53.16 PM.jpeg" alt="Team working together" className="img-fluid rounded shadow-lg" />
                </div>
            </div>
            <div className="social-media-links text-center mt-5">
                <h4 className="mb-3" style={{ color: "#FFD700" }}>Follow Us</h4>
                <a href="https://www.linkedin.com/in/ubaid-ahmed-146338311/" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px", color: "#1DA1F2", fontSize: "1.5rem" }}>
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/ubaid_aziz207/" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px", color: "#C13584", fontSize: "1.5rem" }}>
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/ubaid.aziz.779" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px", color: "#1877F2", fontSize: "1.5rem" }}>
                    <i className="fab fa-facebook"></i>
                </a>
            </div>
        </div>
    );
};

export default About;

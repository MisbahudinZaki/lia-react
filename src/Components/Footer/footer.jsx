import { NavLink } from "react-router-dom";
import NewsletterForm from "../Form/NewsletterForm";

const Footer = () => {
    return (
        <footer>
            <div className="section footer-banner">
                <div className="hero-container">
                    <div className="d-flex flex-column gspace-2">

                        {/* Footer Header */}
                        <div className="footer-header">
                            <div className="logo-container footer">
                                <img
                                    src="/assets/images/logo.webp"
                                    alt="Logo"
                                    className="img-fluid"
                                />
                            </div>

                            <p>
                                Velit egestas dui id ornare arcu. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum.
                            </p>

                            <div className="social-container">
                                <a href="#" className="social-item"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#" className="social-item"><i className="fa-brands fa-x-twitter"></i></a>
                                <a href="#" className="social-item"><i className="fa-brands fa-linkedin-in"></i></a>
                                <a href="#" className="social-item"><i className="fa-brands fa-instagram"></i></a>
                            </div>
                        </div>

                        {/* Footer Links */}
                        <div className="footer-link">
                            <div className="underline-footer"></div>

                            <div className="row row-cols-xl-4 row-cols-md-2 row-cols-1 g-3">

                                {/* Contact */}
                                <div className="col">
                                    <div className="d-flex flex-column gspace-2 text-xl-start text-center align-items-xl-start align-items-center">
                                        <h5 className="accent-color">Get In Touch</h5>
                                        <div className="footer-list-underline"></div>

                                        <div className="d-flex flex-row align-items-center gspace-2">
                                            <i className="fa-solid fa-md fa-phone accent-color"></i>
                                            <div>
                                                <p className="mb-0">Phone</p>
                                                <p className="mb-0">(+62)812 1234 4567</p>
                                            </div>
                                        </div>

                                        <div className="d-flex flex-row align-items-center gspace-2">
                                            <i className="fa-solid fa-md fa-envelope accent-color"></i>
                                            <div>
                                                <p className="mb-0">Email</p>
                                                <p className="mb-0">lia@example.com</p>
                                            </div>
                                        </div>

                                        <div className="d-flex flex-row align-items-center gspace-2">
                                            <i className="fa-solid fa-md fa-location-dot accent-color"></i>
                                            <div>
                                                <p className="mb-0">Location</p>
                                                <p className="mb-0">Pekanbaru, Indonesia</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Quick Links */}
                                <div className="col">
                                    <div className="d-flex flex-column gspace-2 text-xl-start text-center align-items-xl-start align-items-center">
                                        <h5 className="accent-color">Quick Links</h5>
                                        <div className="footer-list-underline"></div>
                                        <ul className="footer-list">
                                            <li><NavLink to="/about">About</NavLink></li>
                                            <li><NavLink to="/team">Team</NavLink></li>
                                            <li><NavLink to="/faq">FAQs</NavLink></li>
                                            <li><NavLink to="/contact">Contact</NavLink></li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Services */}
                                <div className="col">
                                    <div className="d-flex flex-column gspace-2 text-xl-start text-center align-items-xl-start align-items-center">
                                        <h5 className="accent-color">Services</h5>
                                        <div className="footer-list-underline"></div>
                                        <ul className="footer-list">
                                            <li><NavLink to="/service-detail">Content Creation</NavLink></li>
                                            <li><NavLink to="/service-detail">Digital Marketing</NavLink></li>
                                            <li><NavLink to="/service-detail">SEO and SEM Services</NavLink></li>
                                            <li><NavLink to="/service-detail">Analytics and Reporting</NavLink></li>
                                            <li><NavLink to="/service-detail">E-commerce Solutions</NavLink></li>
                                            <li><NavLink to="/service-detail">Graphic Design</NavLink></li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Newsletter */}
                                <div className="col">
                                    <div className="d-flex flex-column gspace-2 text-xl-start text-center align-items-xl-start align-items-center">
                                        <h5 className="accent-color">Subscribe to Our Newsletter</h5>
                                        <div className="footer-list-underline"></div>

                                        <p>
                                            Augue interdum velit euismod in pellentesque massa placerat duis.
                                        </p>

                                        <NewsletterForm />
                                    </div>
                                </div>

                            </div>

                            <div className="underline-footer"></div>
                        </div>

                        {/* Copyright */}
                        <div className="copyright-container">
                            <p>
                                Copyright © 2024 Lia, All rights reserved. Powered by Creed Creatives
                            </p>

                            <div className="d-flex flex-row align-items-center gspace-2">
                                <a href="#" className="legal-link">Privacy Policy</a>
                                <a href="#" className="legal-link">Terms of Service</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
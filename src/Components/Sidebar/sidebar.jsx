import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside>
            <div>
                <div className="sidebar-overlay"></div>

                <div className="sidebar">
                    <div className="sidebar-header">
                        <div className="logo-container sidebar-logo">
                            <img
                                src="/assets/images/logo.webp"
                                alt="Logo"
                                className="img-fluid"
                            />
                        </div>

                        <button className="close-btn btn-white-accent">
                            <span>X</span>
                        </button>
                    </div>

                    <ul className="menu">

                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>

                        {/* Services */}
                        <li className="sidebar-dropdown">
                            <div className="dropdown-header">
                                <a href="#">Service</a>
                                <button className="sidebar-dropdown-btn">
                                    <i className="fa-solid fa-chevron-down"></i>
                                </button>
                            </div>
                            <ul className="sidebar-dropdown-menu">
                                <li><NavLink to="/service">Services</NavLink></li>
                                <li><NavLink to="/service-detail">Service Details</NavLink></li>
                            </ul>
                        </li>

                        {/* Portfolio */}
                        <li className="sidebar-dropdown">
                            <div className="dropdown-header">
                                <a href="#">Portfolio</a>
                                <button className="sidebar-dropdown-btn">
                                    <i className="fa-solid fa-chevron-down"></i>
                                </button>
                            </div>
                            <ul className="sidebar-dropdown-menu">
                                <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                                <li><NavLink to="/portfolio-detail">Portfolio Detail</NavLink></li>
                            </ul>
                        </li>

                        {/* Pages */}
                        <li className="sidebar-dropdown">
                            <div className="dropdown-header">
                                <a href="#">Pages</a>
                                <button className="sidebar-dropdown-btn">
                                    <i className="fa-solid fa-chevron-down"></i>
                                </button>
                            </div>
                            <ul className="sidebar-dropdown-menu">
                                <li><NavLink to="/pricing">Pricing Plan</NavLink></li>
                                <li><NavLink to="/team">Our Team</NavLink></li>
                                <li><NavLink to="/faq">FAQs</NavLink></li>
                                <li><NavLink to="/notfound">404 Error</NavLink></li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                                <li><NavLink to="/blog">Blog Archive</NavLink></li>
                                <li><NavLink to="/single-post">Blog Detail</NavLink></li>
                            </ul>
                        </li>

                        <li className="below-dropdown">
                            <NavLink to="/contact">Contact Us</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
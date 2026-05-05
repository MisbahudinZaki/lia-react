import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useNav } from "../Context/NavContext";

const Header = () => {
    const { isDropdownActive } = useNav();
    const headerRef = useRef(null);

    useEffect(() => {
        const scrollThreshold = 50;

        function handleScroll() {
            if (window.scrollY > scrollThreshold) {
                headerRef.current?.classList.add('scrolled');
            } else {
                headerRef.current?.classList.remove('scrolled');
            }
        }

        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="header-fixed" ref={headerRef}>
            <div className="hero-container">
                <nav className="navbar navbar-expand-xl">
                    <div className="container-fluid">

                        {/* Logo */}
                        <div className="logo-container header-logo">
                            <NavLink className="navbar-brand" to="/">
                                <img
                                    src="/assets/images/logo.webp"
                                    className="img-fluid"
                                    alt="Logo"
                                />
                            </NavLink>
                        </div>

                        {/* Mobile Toggle */}
                        <div className="nav-link-wrapper">
                            <button
                                className="btn nav-btn"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <i className="fa-solid fa-bars-staggered"></i>
                            </button>

                            {/* Navigation */}
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">

                                    <li className="nav-item">
                                        <NavLink to="/" end className="nav-link">
                                            Home
                                        </NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink to="/about" className="nav-link">
                                            About
                                        </NavLink>
                                    </li>

                                    {/* Services */}
                                    <li className="nav-item dropdown">
                                        <a
                                            href="#"
                                            className={`nav-link dropdown-toggle ${
                                                isDropdownActive(["/service", "/service-detail"])
                                                    ? "active"
                                                    : ""
                                            }`}
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Services <i className="fa-solid fa-angle-down"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <NavLink to="/service" className="dropdown-item">
                                                    Service
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/service-detail" className="dropdown-item">
                                                    Service Detail
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </li>

                                    {/* Portfolio */}
                                    <li className="nav-item dropdown">
                                        <a
                                            href="#"
                                            className={`nav-link dropdown-toggle ${
                                                isDropdownActive(["/portfolio", "/portfolio-detail"])
                                                    ? "active"
                                                    : ""
                                            }`}
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Portfolio <i className="fa-solid fa-angle-down"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <NavLink to="/portfolio" className="dropdown-item">
                                                    Portfolio
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/portfolio-detail" className="dropdown-item">
                                                    Portfolio Detail
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </li>

                                    {/* Pages */}
                                    <li className="nav-item dropdown">
                                        <a
                                            href="#"
                                            className={`nav-link dropdown-toggle ${
                                                isDropdownActive([
                                                    "/pricing",
                                                    "/team",
                                                    "/faq",
                                                    "/404",
                                                    "/contact",
                                                    "/blog",
                                                    "/single-post",
                                                ])
                                                    ? "active"
                                                    : ""
                                            }`}
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Pages <i className="fa-solid fa-angle-down"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><NavLink to="/pricing" className="dropdown-item">Pricing Plan</NavLink></li>
                                            <li><NavLink to="/team" className="dropdown-item">Our Team</NavLink></li>
                                            <li><NavLink to="/faq" className="dropdown-item">FAQs</NavLink></li>
                                            <li><NavLink to="/notfound" className="dropdown-item">404 Error</NavLink></li>
                                            <li><NavLink to="/contact" className="dropdown-item">Contact</NavLink></li>
                                            <li><NavLink to="/blog" className="dropdown-item">Blog Archive</NavLink></li>
                                            <li><NavLink to="/single-post" className="dropdown-item">Blog Detail</NavLink></li>
                                        </ul>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="nabar-cta-container">
                            <NavLink to="/contact" className="btn btn-accent-outline">
                                Contact Us
                            </NavLink>
                        </div>

                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;

import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <div className="navbar">
                <Link
                    activeClass="active"
                    to="main-section"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Main
                </Link>
                <Link
                    activeClass="active"
                    to="about-section"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    About
                </Link>
                <Link
                    activeClass="active"
                    to="contact-section"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Contact
                </Link>
        </div>
    )
};

export default Navbar
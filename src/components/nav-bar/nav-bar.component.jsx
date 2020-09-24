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
                    offset={0}
                    duration={250}
                >
                    Main
                </Link>
                <Link
                    activeClass="active"
                    to="about-section"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={250}
                >
                    About
                </Link>
                <Link
                    activeClass="active"
                    to="contact-section"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={250}
                >
                    Contact
                </Link>
        </div>
    )
};

export default Navbar
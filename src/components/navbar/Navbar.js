import React from 'react';
import {useEffect, useState} from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {

    const [show, setShow] = useState(true);
    const [initialNavbar, setInitialNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
                setShow(false);
            } else { // if scroll up show the navbar
                setShow(true);
            }

            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {

        if(lastScrollY<50) {
            setInitialNavbar(true)
        } else {
            setInitialNavbar(false)
        }

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);
    return (
        <div style={{height:'1px'}}>
                <div className={initialNavbar ? 'navbar-pc navbar-transparent': 'navbar-pc'} style={{top : !show && !initialNavbar ? '-75px' : 0}}>
                    <ul id="navbar-pc-ul">
                        <li className="navbar-pc-ul-element"><Link
                            to="about-us-section"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >ABOUT</Link></li>
                        <li className="navbar-pc-ul-element"><Link
                            to="mindmap-section"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >MINDMAP</Link></li>
                        <li className="navbar-pc-ul-element"><Link
                            to="faqs-section"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >FAQs</Link></li>
                        <li className="navbar-pc-ul-element"><Link
                            to="teams-section"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >TEAM</Link></li>
                    </ul>
                </div>
        </div>
    );
}

export default Navbar
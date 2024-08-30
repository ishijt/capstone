import React from "react";
import logo from '../images/small_logo.png';

const Footer = () => {
    return (
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt=''/>
                </div>
                <div>
                    <h3>Navigation</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Menu</a></li>
                        <li><a href='/'>Reservations</a></li>
                        <li><a href='/'>Order Online</a></li>
                        <li><a href='/'>Login</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li><a href='/'>Address</a></li>
                        <li><a href='/'>Phone Number</a></li>
                        <li><a href='/'>E-mail</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href='/'>Instagram</a></li>
                        <li><a href='/'>Facebook</a></li>
                        <li><a href='/'>Twitter / X</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer;
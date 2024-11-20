import React from 'react';
import logo from './images/Logo .svg'

const Footer = () => {
    return (
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt=''/>
                    <p>We are a family owned Mediterranean restaurant, focused on tradtional recipes served with a modern twist</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul className='footlinks'>
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
                        <li>Address <br/> 123 Town Avenue <br/> Chicago,Illinois 67435</li>
                        <li>Phone: <br/> 1 (564)564-3535</li>
                        <li>Email: <br/> little@littlelemon.com</li>
                    </ul>
                </div>

                <div className='social-links'>
                    <h3>Social Media</h3>
                    <ul>
                    <li><a href='/'>Facebook</a></li>
                    <li><a href='/'>Instagram</a></li>
                    <li><a href='/'>X</a></li> 
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
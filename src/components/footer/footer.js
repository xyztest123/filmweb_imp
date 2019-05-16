import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';
import logo from './img/logo.png';

const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="container">
                    <div className="col">
                        <img src={logo} alt="Filmweb" />
                    </div>
                    <div className="col">
                        <h3>Nowośći</h3>
                    </div>
                    <div className="col">
                        <h3>Social Media</h3>
                    </div>
                    <div className="col">
                        <h3>Kontakt</h3>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="copywrite">
                        2019 Wszystkie prawa zastrzeżone
                    </div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/ranking">Ranking</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
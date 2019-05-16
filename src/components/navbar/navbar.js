import React, { Component } from 'react';
import NavbarTop from './navbarTop';
import NavbarMain from './navbarMain';
import './navbar.scss';

class Navbar extends Component {
    state = {}
    render() {
        return (
            <div>
                <NavbarTop />
                <NavbarMain />
            </div>
        );
    }
}

export default Navbar;
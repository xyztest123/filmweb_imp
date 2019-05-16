import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from './img/logo.png';
import './navbarMain.scss';

class NavbarMain extends Component {
    render() {
        let { categoriesList } = { ...this.props };
        return (
            <div className="navbar-main">
                <div className="container">
                    <div className="navbar-main-logo">
                        <Link to="/">
                            <img src={logo} alt="Filmweb" />
                        </Link>
                    </div>
                    <div className="navbar-main-links">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/aktualnosci">Aktualności</Link>
                            </li>
                            <li>
                                <Link to="/kategorie">
                                    Kategorie <span className="triangle"></span>
                                </Link>
                                <ul className="navbar-main-submenu">
                                    {categoriesList.length > 0 &&
                                        <>
                                            {categoriesList.map((item) => {
                                                return (
                                                    <li key={item.id}><Link to={`/kategoria/${item.clean_name}`}>{item.name}</Link></li>
                                                )
                                            })}
                                        </>
                                    }
                                </ul>
                            </li>
                            <li>
                                <Link to="/ranking">Ranking</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        categoriesList: state.categories.categoriesList
    }
}

export default connect(mapStateToProps, null)(NavbarMain);

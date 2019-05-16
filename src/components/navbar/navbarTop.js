import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbarTop.scss';
import { connect } from 'react-redux';

class NavbarTop extends Component {
    render() {
        return (
            <div className="navbar-top">
                <div className="container">
                    {!this.props.isLogin ? (
                        <>
                            <Link to="/logowanie">
                                <i className="far fa-user"> </i> Logowanie
                            </Link>
                            <Link to="/rejestracja">
                                <i className="fas fa-key"></i> Rejestracja
                            </Link>
                        </>
                    ) : (
                            <div className="user-login">
                                Witaj {this.props.user.name}
                                <span>|</span>
                                <Link to="/wyloguj">
                                    <i class="fas fa-sign-out-alt"></i> Wyloguj
                                </Link>
                            </div>
                        )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.auth.isLogin,
        user: state.auth.user
    }
}

export default connect(mapStateToProps, null)(NavbarTop);
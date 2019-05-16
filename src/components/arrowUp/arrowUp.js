import React, { Component } from 'react';
import './arrowUp.scss';

class ArrowUp extends Component {
    state = {
        show: false
    }
    componentDidMount = () => {
        window.addEventListener("scroll", this.arrowUpShow)
    }
    componentWillUnmount = () => {
        window.removeEventListener("scroll", this.arrowUpShow);
    }
    arrowUpShow = () => {
        if (window.pageYOffset > 30) {
            this.setState({
                show: true
            })
        } else {
            this.setState({
                show: false
            })
        }
    }
    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    render() {
        return (
            <>
                {this.state.show &&
                    <div onClick={this.scrollToTop} className="arrow-up">
                        <i className="fas fa-angle-double-up"></i>
                    </div>
                }
            </>
        );
    }
}

export default ArrowUp;
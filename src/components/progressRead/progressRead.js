import React, { Component } from 'react';
import './progressRead.scss';

class ProgressRead extends Component {
    state = {
        percent: 0
    }
    componentDidMount = () => {
        window.addEventListener("scroll", this.updateProgressBar)
    }
    componentWillUnmount = () => {
        window.removeEventListener("scroll", this.updateProgressBar)
    }
    updateProgressBar = () => {
        let scrollPosition = window.pageYOffset;
        let documentHeight = document.body.scrollHeight;
        let windowHeight = window.innerHeight;
        let percent = (scrollPosition / (documentHeight - windowHeight)) * 100;

        this.setState({
            percent: percent
        })
    }
    render() {
        const { percent } = { ...this.state }
        return (
            <div className="progress-bar">
                <div className="status" style={{ width: percent + '%' }} >
                </div>
            </div >
        );
    }
}

export default ProgressRead;
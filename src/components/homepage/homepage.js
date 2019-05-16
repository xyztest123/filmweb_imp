import React, { Component } from 'react';
import Slider from 'react-slick';
import './homepage.scss';

class Homepage extends Component {
    state = {}
    render() {
        let sliderSettings = {
            autoplay: true,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true
        };
        return (
            <div className="homepage">
                <div className="homepage-slider">
                    <Slider {...sliderSettings}>

                        <div>
                            <div className="item" style={{ backgroundImage: `url(https://static.antyweb.pl/wp-content/uploads/2019/04/16211434/koniec.jpg)` }}>
                                <div className="container">
                                    <h1>Zobacz nowych Avengersów</h1>
                                    <div className="description">
                                        Nowi avengersi zbierajaą super opinie. ZObacz ich koniecznie
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="item" style={{ backgroundImage: `url(https://www.electronicbeats.net/app/uploads/sites/5/2018/11/krol-lew-1-1200x675.jpg)` }}>
                                <div className="container">
                                    <h1>Lion King</h1>
                                    <div className="description">
                                        Nowi avengersi zbierajaą super opinie. ZObacz ich koniecznie
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}

export default Homepage;
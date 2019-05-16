import React, { Component } from 'react';
import { loadSingleNewsFromApi } from '../../actions/news';
import Loader from '../loader/loader';
import NewsListItem from './newsListItem';
import './newsDetail.scss';
import ProgressRead from '../progressRead/progressRead';
import Share from '../share/share';

class NewsDetail extends Component {
    state = {
        isLoading: true,
        news: {},
        similarNews: {},
        status: 200
    }
    loadSingleNews = (slug) => {
        this.setState({
            isLoading: true
        })
        loadSingleNewsFromApi(slug)
            .then((response) => {
                this.setState({
                    status: response.status,
                    isLoading: false,
                    news: response.data.news,
                    similarNews: response.data.similarNews
                })
            }).catch((error) => {
                this.setState({
                    status: 404,
                    isLoading: false,
                })
            })
    }
    componentDidMount = () => {
        let slug = this.props.match.params.slug;
        this.loadSingleNews(slug);
    }
    componentDidUpdate = (prevProps) => {
        if (prevProps.match.params.slug !== this.props.match.params.slug) {
            this.loadSingleNews(this.props.match.params.slug);

        }
    }
    render() {
        if (this.state.status === 404 && !this.state.isLoading) {
            return (
                <div>Ten news nie istnieje!!!</div>
            )
        }
        return (
            <div className="news-detail">
                <div className="container">
                    <Loader />
                    <Loader isLoading={this.state.isLoading} />
                    {!this.state.isLoading &&
                        <div className="news-detail-container" >
                            <div className="news-single">
                                <h1>{this.state.news.name}</h1>
                                <img src={this.state.news.photo} alt={this.state.news.name} />
                                <div className="short-description">
                                    {this.state.news.short_description}
                                </div>
                                <div className="description">
                                    {this.state.news.description}
                                </div>
                                <Share message={this.state.news.name} />
                            </div>
                            <div className="similar-news-container">
                                <h3>Zobacz także:</h3>
                                {this.state.similarNews.map((item) => {
                                    return <NewsListItem key={item.id} news={item} />
                                })}
                            </div>
                        </div>


                    }

                </div>
                <ProgressRead />
            </div>

        );
    }
}

export default NewsDetail;
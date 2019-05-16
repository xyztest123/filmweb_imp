import React, { Component } from 'react';
import { loadNewsFromApi } from '../../actions/news';
import Loader from '../loader/loader';
import NewsListItem from './newsListItem';
import Pagination from '../pagination/pagination';
import './newsList.scss';

class NewsList extends Component {
    state = {
        isLoading: true,
        newsList: {},
        page: 1
    }

    loadNews = (page) => {
        this.setState({ isLoading: true })
        loadNewsFromApi(page).then((response) => {
            this.setState({
                isLoading: false,
                newsList: response.data.news.data,
                lastPage: response.data.news.last_page
            })
        })
    }

    componentDidMount = () => {
        let page = this.props.match.params.page;
        if (typeof page !== 'undefined') {
            this.setState({
                page: parseInt(page)
            })
        } else {
            page = 1;
        }

        this.loadNews(page);
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.match.params.page !== this.props.match.params.page) {
            this.loadNews(this.props.match.params.page);
            this.setState({
                page: this.props.match.params.page
            })
        }
    }

    render() {
        return (
            <div className="news-list">
                <div className="container">
                    <Loader isLoading={this.state.isLoading} />
                    {(!this.state.isLoading && this.state.newsList.length) &&
                        <>
                            <div className="news-list-items">
                                {this.state.newsList.map((item) => {
                                    return <NewsListItem key={item.id} news={item} />
                                })}
                            </div>
                            <Pagination url="/aktualnosci" lastPage={this.state.lastPage} currentPage={this.state.page} />
                        </>
                    }
                </div>
            </div>
        );
    }
}

export default NewsList;
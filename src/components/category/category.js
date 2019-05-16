import React, { Component } from 'react';
import './category.scss'
import { connect } from 'react-redux';
import Loader from '../loader/loader';
import { loadCategory } from '../../actions/category';
import { Link } from 'react-router-dom';


class Category extends Component {
    loadMovies = () => {
        let slug = this.props.match.params.slug;
        let page = this.props.match.params.page;

        if (typeof page === 'undefined') {
            page = 1;
        }
        this.props.dispatch(loadCategory(slug, page));
    }
    componentDidMount = () => {
        this.loadMovies()
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.match.params.page !== this.props.match.params.page ||
            prevProps.match.params.slug !== this.props.match.params.slug) {
            this.loadMovies();
        }
    }


    render() {
        return (
            <div className='container'>
                <Loader isLoading={this.props.isLoading} ></Loader>
                {!this.props.isLoading &&
                    <div className="category">
                        <h1> {this.props.category.name} </h1>
                        {this.props.movies.data.length ? (
                            <div className="movies-list">
                                {this.props.movies.data.map((item) => {
                                    return (
                                        <div className="movie">
                                            <div className="poster">
                                                <img src={item.movie.poster} alt={item.movie.name} />
                                            </div>
                                            <div className="data">
                                                <h2>
                                                    {item.movie.name}
                                                </h2>
                                                <p>
                                                    {item.movie.description}
                                                </p>
                                                <Link to={`/film/${item.movie.clean_name}`}> Zobacz szczegóły </Link>
                                            </div>

                                        </div>
                                    )

                                })}
                            </div>
                        ) : (
                                <div className="error">
                                    Podana kategoria nie zawiera żadnych filmów
                            </div>
                            )}
                    </div>
                }
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        isLoading: state.category.isLoading,
        isError: state.category.isError,
        category: state.category.category,
        movies: state.category.movies,
    }
}

export default connect(mapStateToProps, null)(Category);


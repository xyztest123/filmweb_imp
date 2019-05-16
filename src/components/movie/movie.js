import React, { Component } from 'react';
import { loadsMovieDataFromApi } from '../../actions/movie';
import { connect } from 'react-redux';
import Loader from '../loader/loader';
import { convertMinutesToHours } from '../../utils/convertMinutesToHours';
import { Link } from 'react-router-dom';
import './movie.scss'; 
    
class Movie extends Component {

    componentDidMount = () => {
        this.loadSingleMovie()
    }

    loadSingleMovie = () => {
        let title = this.props.match.params.movieTitle
        this.props.loadMovieFromApi(title)
    }

    render() {
        return (

            <div className="container">
                <Loader isLoading={this.props.isLoading} />
                {!this.props.isLoading &&
                    <div className="movie">
                        <div className="movie-top">
                            <div className="photo">
                                <img src={this.props.movie.poster} />
                            </div>
                            <div className="movie-info">
                                <div className="title">
                                    {this.props.movie.name}
                                </div>
                                <div className="description">
                                    {this.props.movie.description}
                                </div>
                                <div className="duration">
                                    Czas trwania: {convertMinutesToHours(this.props.movie.duration)} 
                                </div>
                              <div className='categories'>

                              {this.props.category.map((item, key) => {
                                    return (
                                        <span className="category">
                                            <Link to={`/kategoria/${item.category.clean_name}`}>{item.category.name}</Link>
                                        </span>
                                    )
                                })}
                            
                             </div>
                            </div>
                    </div>
                    <div className="gallery">
                        {this.props.movie.photos.map(item => {
                            return (
                                <div className="photo">
                                    <img src={item.photo} />
                                </div>
                            )
                        })}
                    </div>
                    </div>
}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.movie.isLoading,
        isError: state.movie.isError,
        movie: state.movie.movie,
        category: state.movie.category,
        errorMessage: state.movie.errorMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadMovieFromApi: (title) => dispatch(loadsMovieDataFromApi(title))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
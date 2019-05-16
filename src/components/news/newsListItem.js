import React from 'react';
import { Link } from 'react-router-dom';


const NewsListItem = (props) => {
    return (
        <div className="news-list-item">
            <Link to={`/aktualnosc/${props.news.clean_name}`}>
                <div className="image">
                    <img src={props.news.thumb} alt={props.news.name} />
                </div>
                <div className="title">
                    {props.news.name}
                </div>
            </Link>
        </div>
    );
}

export default NewsListItem;
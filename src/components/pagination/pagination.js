import React from 'react';
import { Link } from 'react-router-dom';
import './pagination.scss';

const Pagination = (props) => {

    const createPagination = () => {
        let pagination = [];
        let { lastPage, currentPage, url } = { ...props }
        for (let i = 1; i <= lastPage; i++) {
            let urlWithPage = url + '/' + i;
            if (i != currentPage) {
                pagination.push(
                    <li>
                        <Link to={urlWithPage}>{i}</Link>
                    </li>
                )
            }
            else {
                pagination.push(
                    <li>
                        <Link className="active" to={urlWithPage}>{i}</Link>
                    </li>
                )
            }
        }
        return pagination;
    }

    return (
        <ul className="pagination">
            {createPagination()}
        </ul>
    );
}

export default Pagination;
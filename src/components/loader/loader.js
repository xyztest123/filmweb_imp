import React from 'react';
import PropTypes from 'prop-types';


import './loader.scss';

const Loader = (props) => {
    return (
        <>
            {props.isLoading &&
                <div className="loader-center">
                    <div className="lds-heart"><div></div></div>
                </div>
            }
        </>
    );
}

Loader.propTypes = {
    isLoading: PropTypes.bool.isRequired
}
export default Loader;
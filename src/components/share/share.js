import React from 'react';

const Share = (props) => {
    const fbShare = () => {
        let url = window.location.href;
        window.open(
            "https://facebook.com/share.php?u="
            + url +
            "&quote=Zobacz koniecznie: " + props.message,
            "sharer",
            "toolbar=0,status=0,width=550,height=400"
        )
    }

    const twitterShare = () => {
        let url = window.location.href;
        window.open(
            "https://twitter.com/intent/tweet?url="
            + url +
            "&text=Zobacz koniecznie: " + props.message,
            "sharer",
            "toolbar=0,status=0,width=550,height=400"
        )
    }

    return (
        <div className="share">
            <div onClick={fbShare} className="icon fb">
                <i className="fab fa-facebook-f"></i>
            </div>
            <div onClick={twitterShare} className="icon twitter">
            <i className="fab fa-twitter"></i>
        </div>
        </div >
    );
}

export default Share; 
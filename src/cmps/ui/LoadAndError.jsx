import React from 'react';
import './loader.css';
import './error.css';

// LOADING

export const svgLoader = ({svg,animation_class }) => {
    return (
        <img className={animation_class} src={svg} alt="loader-icon" />
      );
}
export const rippleLoader = () => {
    return (
        <div className="lds-ripple"> <div></div> <div></div> </div>
        );
}


export const renderSavingMessage = (msg = 'new user') => {
    return (
        <div className="alert alert-info">
            Saving {msg}...
        </div>
    );
};




// ERROR
// role = danger / warning
export const renderPostError = (msg = 'Unable to save the user') => {
    return (
        <div className="alert alert-danger">
            An error occurred! {msg}.
        </div>
    );
};

export const renderFetchError = () => {
    return (
        <div className="alert alert-danger">
            Something went wrong 
        </div>
    );
};
export const renderMsgError = (msg ,role = 'danger') => {
    return (
        <div className={"alert alert-" + role}>
            {msg}
        </div>
    );
};
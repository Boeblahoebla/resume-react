// Imports
//////////

// Dependencies
import React from 'react';


// Component
////////////

const InfoItem = ({ icon, text }) => {
    return (
        <div className="info__section__content__item">
            <div className="info__section__content__item__icon text-center">
                <i className={`${icon} lead text-secondary`}/>
            </div>
            <div className="lead">
                {text}
            </div>
        </div>
    )
};


// Exports
//////////

export default InfoItem;
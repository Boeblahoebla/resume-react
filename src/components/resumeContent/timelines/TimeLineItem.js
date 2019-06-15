// Imports
//////////

// Dependencies
import React from 'react';


// Component
////////////

const TimeLineItem = ({expEdu}) => {

    // Fetch the topic, timeframe & text from the props
    const { topic, timeframe, text, flag } = expEdu;

    return (
        <div className="tl__item arrow-box">
            <div className={`tl__item__content text-right tl__item__content--${flag}`}>
                <h3 className="tl__item__content__header">{topic}</h3>
                <div className="timestamp text-info mb-4">
                    <strong className="lang">
                        {timeframe}
                    </strong>
                </div>
                <p className="lang">
                    {text}
                </p>
            </div>
        </div>
    )
};


// Exports
//////////

export default TimeLineItem;
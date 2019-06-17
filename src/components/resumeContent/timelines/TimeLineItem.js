// Imports
//////////

// Dependencies
import React, { useState, useEffect } from 'react';


// Component
////////////

const TimeLineItem = ({expEdu}) => {
    // Fetch the topic, timeframe & text from the props
    const { topic, timeframe, text, flag } = expEdu;

    // State
    const [paragraphContent, setParagraphContent] = useState(text);

    // When the component receives new props, reset the paragraphContent
    useEffect(() => {
        setParagraphContent(text.substring(0, 100) + ' ...');
    }, [text]);

    // Handler to expand or contract the paragraph
    const paragraphContentHandler = () => {
        if (paragraphContent.indexOf(' ...') > -1) {
            setParagraphContent(text)
        } else {
            setParagraphContent(text.substring(0, 100) + ' ...');
        }
    };

    return (
        <div className="tl__item arrow-box">
            <div className={`tl__item__content text-right tl__item__content--${flag}`}>
                <h3 className="tl__item__content__header">{topic}</h3>
                <div className="timestamp text-info mb-4">
                    <strong className="lang">
                        {timeframe}
                    </strong>
                </div>
                <p className="lang" onClick={() => paragraphContentHandler()}>
                    {paragraphContent}
                </p>
            </div>
        </div>
    )
};


// Exports
//////////

export default TimeLineItem;
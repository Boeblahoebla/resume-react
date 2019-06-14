// Imports
//////////

// Dependencies
import React, {Fragment} from 'react';


// Component
////////////

const ResumeEducation = () => {
    return (
        <Fragment>
            {/* Education header */}
            <div className="header header--edu">
                <h1 className="display-4 lang" data-key="edu-header">Education</h1>
            </div>

            {/* Education timeline */}
            <div className="tl">
                <div className="tl__item arrow-box">
                    <div className="tl__item__content tl__item__content--frontend text-right">
                        <h3>Frontend Developer</h3>
                        <div className="timestamp text-info mb-4">
                            <strong data-key="edu1-header" className="lang">
                                {/* Data */}
                            </strong>
                        </div>
                        <p data-key="edu1-text" className="lang">
                            {/* Data */}
                        </p>
                    </div>
                </div>
                <div className="tl__item arrow-box">
                    <div className="tl__item__content tl__item__content--reactedu text-right">
                        <h3>React Front To Back</h3>
                        <div className="timestamp text-info mb-4">
                            <strong data-key="edu2-header" className="lang">
                                {/* Data */}
                            </strong>
                        </div>
                        <p data-key="edu2-text" className="lang">
                            {/* Data */}
                        </p>
                    </div>
                </div>
                <div className="tl__item arrow-box">
                    <div className="tl__item__content tl__item__content--google text-right">
                        <h3>Android Developer Nanodegree</h3>
                        <div className="timestamp text-info mb-4">
                            <strong data-key="edu3-header" className="lang">
                                {/* Data */}
                            </strong>
                        </div>
                        <p data-key="edu3-text" className="lang">
                            {/* Data */}
                        </p>
                    </div>
                </div>
                <div className="tl__item arrow-box">
                    <div className="tl__item__content tl__item__content--meteo text-right">
                        <h3>Meteo, Devops & Scripting</h3>
                        <div className="timestamp text-info mb-4">
                            <strong data-key="edu4-header" className="lang">
                                {/* Data */}
                            </strong>
                        </div>
                        <p data-key="edu4-text" className="lang">
                            {/* Data */}
                        </p>
                    </div>
                </div>
                <div className="tl__item arrow-box">
                    <div className="tl__item__content tl__item__content--hogent text-right">
                        <h3>Bachelor ICT</h3>
                        <div className="timestamp text-info mb-4">
                            <strong data-key="edu5-header" className="lang">
                                {/* Data */}
                            </strong>
                        </div>
                        <p data-key="edu5-text" className="lang">
                            {/* Data */}
                        </p>
                    </div>
                </div>
                <div className="tl__item arrow-box">
                    <div className="tl__item__content tl__item__content--self text-right">
                        <h3>Autodidact</h3>
                        <div className="timestamp text-info mb-4">
                            <strong data-key="edu6-header" className="lang">
                                {/* Data */}
                            </strong>
                        </div>
                        <p data-key="edu6-text" className="lang">
                            {/* Data */}
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>


    )
};


// Exports
//////////

export default ResumeEducation;
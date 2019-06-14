// Imports
//////////

// Dependencies
import React, { Fragment } from 'react';


// Component
////////////

const ResumeLangs = () => {
    return (
        <Fragment>
            {/* Languages header */}
            <div className="header header--credentials text-center">
                <h1 className="display-4 lang" data-key="lang-header">
                    {/* Data */}
                </h1>
            </div>

            {/* Languages */}
            <div className="credentials">
                {/* Dutch */}
                <div className="credentials__section credentials__section--lang">
                    <h3 className="lang" data-key="lang-dutch"> Dutch </h3>
                    <div className="credentials__section__item mb-2">
                        <div className="credentials__section__item__text lang" data-key="lang-spoken">
                            {/* Data */}
                        </div>
                        <div className="credentials__section__item__bar">
                            <div
                                className="text-center progress-bar progress-bar-striped bg-success progress progress--95"
                                role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%
                            </div>
                        </div>
                    </div>
                    <div className="credentials__section__item mb-2">
                        <div className="credentials__section__item__text lang" data-key="lang-written">
                            {/* Data */}
                        </div>
                        <div className="credentials__section__item__bar">
                            <div
                                className="text-center progress-bar progress-bar-striped bg-success progress progress--95"
                                role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%
                            </div>
                        </div>
                    </div>
                </div>

                {/* English */}
                <div className="credentials__section credentials__section--lang">
                    <h3 className="lang" data-key="lang-english">English</h3>
                    <div className="credentials__section__item mb-2">
                        <div className="credentials__section__item__text lang" data-key="lang-spoken">
                            {/* Data */}
                        </div>
                        <div className="credentials__section__item__bar">
                            <div
                                className="text-center progress-bar progress-bar-striped bg-success progress progress--90"
                                role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%
                            </div>
                        </div>
                    </div>
                    <div className="credentials__section__item mb-2">
                        <div className="credentials__section__item__text lang" data-key="lang-written">
                            {/* Data */}
                        </div>
                        <div className="credentials__section__item__bar">
                            <div
                                className="text-center progress-bar progress-bar-striped bg-success progress progress--85"
                                role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%
                            </div>
                        </div>
                    </div>
                </div>

                {/* French */}
                <div className="credentials__section credentials__section--lang">
                    <h3 className="lang" data-key="lang-french">French</h3>
                    <div className="credentials__section__item mb-2">
                        <div className="credentials__section__item__text lang" data-key="lang-spoken">
                            {/* Data */}
                        </div>
                        <div className="credentials__section__item__bar">
                            <div className="text-center progress-bar progress-bar-striped bg-info progress progress--65"
                                 role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%
                            </div>
                        </div>
                    </div>
                    <div className="credentials__section__item mb-2">
                        <div className="credentials__section__item__text lang" data-key="lang-written">
                            {/* Data */}
                        </div>
                        <div className="credentials__section__item__bar">
                            <div className="text-center progress-bar progress-bar-striped bg-info progress progress--75"
                                 role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
};


// Exports
//////////

export default ResumeLangs;
// Imports
//////////

// Dependencies
import React, { Fragment } from 'react';

// Components
import ProgressSet from '../progress/ProgressSet'


// Component
////////////

const Progresses = ({ header, progressSets }) => {

    // Generate skills
    const progressContent = progressSets.map((progressSet, index) => (
        <ProgressSet progressSet={progressSet} flag={progressSet.flag} key={index}/>
    ));


    return (
        <Fragment>
            {/* Progress header */}
            <div className="header header--credentials">
                <h1 className="display-4">{header}</h1>
            </div>

            {/* Progress content */}
            <div className="credentials">
                {progressContent}
            </div>
        </Fragment>
    )
};


// Exports
//////////

export default Progresses;
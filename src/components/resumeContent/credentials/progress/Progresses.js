// Imports
//////////

// Dependencies
import React, { Fragment } from 'react';

// Components
import ProgressSet from '../progress/ProgressSet'


// Component
////////////

const Progresses = ({ data, progressSets, type }) => {

    // Generate skills
    const progressContent = progressSets.map((progressSet, index) => (
        <ProgressSet progressSet={progressSet} flag={progressSet.flag} key={index}/>
    ));

    // Generate the header content
    const headerContent = (type === 'skill') ? data.header : data.header;

    return (
        <Fragment>
            {/* Progress header */}
            <div className="header header--credentials">
                <h1 className="display-4">{headerContent}</h1>
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
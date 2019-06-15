// Imports
//////////

// Dependencies
import React from 'react';

// Components
import TimeLine from './TimeLine';

// Component
////////////

const TimeLines = ({ data }) => {
    return (
        <div className="col-12 col-lg-6">
            {/* Work Experience timeline */}
            <TimeLine data={data.exp} type="exp"/>
            {/* Education Experience timeline */}
            <TimeLine data={data.edu} type="edu"/>
        </div>
    )
};


// Exports
//////////

export default TimeLines;
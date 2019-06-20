// Imports
//////////

// Dependencies
import React, {Fragment} from 'react';

// Components
import TimeLineItem from './TimeLineItem';


// Component
////////////

const TimeLine = ({data, type}) => {

    // Generate the timeline content
    let timeline;

    if (type === "exp") {
        timeline = data.exps.map((exp, index) => (
            <TimeLineItem key={index} expEdu={exp} />
        ));
    } else {
        timeline = data.edus.map((edu, index) => (
            <TimeLineItem key={index} expEdu={edu} />
        ));
    }

    return (
        <Fragment>
            {/* Header */}
            <div className="header header--work header--work-edu">
                <h1 className="display-4 lang">{data.header}</h1>
            </div>

            {/* Timeline */}
            <div className="tl">
                {timeline}
            </div>
        </Fragment>
    )
};


// Exports
//////////

export default TimeLine;
// Imports
//////////

// Dependencies
import React from 'react';

// Components
import Progresses from './progress/Progresses';
import Testimonials from './testimonials/Testimonials';


// Component
////////////

const Credentials = ({ data, skillSets}) => {

    return (
        <div className="col-12 col-lg-6">
            <Progresses header={data.skill.header} progressSets={skillSets} type="skill" />
            <Progresses header={data.lang.header} progressSets={data.lang.languages} type="lang" />
            <Testimonials header={data.test.header} testimonials={data.test.testimonials}/>
        </div>
    )
};


// Exports
//////////

export default Credentials;
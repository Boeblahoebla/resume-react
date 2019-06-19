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
            <Progresses data={data.skill} progressSets={skillSets} type="skill" />
            <Progresses data={data.lang} progressSets={data.lang.languages} type="lang" />
            <Testimonials data={data.test}/>
        </div>
    )
};


// Exports
//////////

export default Credentials;
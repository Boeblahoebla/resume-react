// Imports
//////////

// Dependencies
import React from 'react';

// Components
import Skills from './skills/Skills';
import Languages from './languages/Languages';
import Testimonials from './testimonials/Testimonials';


// Component
////////////

const Credentials = ({ data, skillSets, languages }) => {

    console.log("info in Credentials component");
    console.log(data);
    console.log(skillSets);
    console.log(languages);

    return (
        <div className="col-12 col-lg-6">
            <Skills data={data} skillSets={skillSets} />
            <Languages data={data} languages={languages}/>
            <Testimonials data={data}/>
        </div>
    )
};


// Exports
//////////

export default Credentials;
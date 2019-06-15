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

const Credentials = () => {
    return (
        <div className="col-12 col-lg-6">
            <Skills />
            <Languages />
            <Testimonials />
        </div>
    )
};


// Exports
//////////

export default Credentials;
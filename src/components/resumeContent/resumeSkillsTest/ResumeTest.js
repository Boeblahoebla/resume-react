// Imports
//////////

// Dependencies
import React from 'react';

// Media
import patrick from '../../../images/patrick.png';
import michael from '../../../images/michael.png'


// Component
////////////

const ResumeTest = () => {
    return (
        <div>
            {/* Testimonials header */}
            <div className="header header--credentials text-center">
                <h1 className="display-4 lang" data-key="test-header">
                    {/* Data */}
                </h1>
            </div>

            {/* Testimonials list */}
            <div className="credentials">
                {/* Patrick Moesick */}
                <div className="credentials__section credentials__section--testimonial">
                    <h3>Patrick Moesick <small className="text-muted">- AteljeeVZW</small></h3>
                    <div className="credentials__section__item mb-2">
                        <p className="mb-0 lang" data-key="test1-text">
                            {/* Data */}
                        </p>
                    </div>
                    <div className="credentials__section__avatar">
                        <img src={patrick} alt="Patrick Moesick" width="45px"/>
                    </div>
                </div>

                {/* Michael Verhaeghe */}
                <div className="credentials__section credentials__section--testimonial">
                    <h3>Michael Verhaeghe <small className="text-muted">- Chase2be</small></h3>
                    <div className="credentials__section__item mb-2">
                        <p className="mb-0 lang" data-key="test2-text">
                            {/* Data */}
                        </p>
                    </div>
                    <div className="credentials__section__avatar">
                        <img src={michael} alt="Michael verhaeghe" width="45px"/>
                    </div>
                </div>
            </div>
        </div>
    )
};


// Exports
//////////

export default ResumeTest;
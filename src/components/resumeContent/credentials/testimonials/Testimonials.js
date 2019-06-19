// Imports
//////////

// Dependencies
import React from 'react';

// Components
import TestimonialItem from '../testimonials/TestimonialItem';


// Component
////////////

const Testimonials = ({ data }) => {

    // Generate the Testimonials
    const testimonials = data.testimonials.map(testimonial => (
        <TestimonialItem data={testimonial} />
    ))

    return (
        <div>
            {/* Testimonials header */}
            <div className="header header--credentials text-center">
                <h1 className="display-4 lang" data-key="test-header">
                    {data.header}
                </h1>
            </div>

            {/* Testimonials list */}
            <div className="credentials">
                {testimonials}
            </div>
        </div>
    )
};


// Exports
//////////

export default Testimonials;
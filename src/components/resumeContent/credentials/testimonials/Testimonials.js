// Imports
//////////

// Dependencies
import React from 'react';

// Components
import TestimonialItem from '../testimonials/TestimonialItem';


// Component
////////////

const Testimonials = ({ header, testimonials }) => {

    // Generate the Testimonials
    const testimonialItems = testimonials.map((testimonial, index) => (
        <TestimonialItem testimonial={testimonial.testimonial} name={testimonial.name} where={testimonial.where} key={index}/>
    ));

    return (
        <div>
            {/* Testimonials header */}
            <div className="header header--credentials text-center">
                <h1 className="display-4">
                    {header}
                </h1>
            </div>

            {/* Testimonials list */}
            <div className="credentials">
                {testimonialItems}
            </div>
        </div>
    )
};


// Exports
//////////

export default Testimonials;
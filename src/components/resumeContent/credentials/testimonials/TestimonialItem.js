// Imports
//////////

// Dependencies
import React, {useEffect, useState} from 'react';

// Media
import patrick from '../../../../images/patrick.png';
import michael from '../../../../images/michael.png'


// Component
////////////

const TestimonialItem = ({ data }) => {

    // State
    const [paragraphContent, setParagraphContent] = useState(data.testimonial);

    // When the component receives new props, reset the paragraphContent
    useEffect(() => {
        setParagraphContent(data.testimonial.substring(0, 100) + ' ...');
    }, [data.testimonial]);

    // Find the right avatar
    let avatar;

    if(data.name.toLowerCase().indexOf('patrick') > -1 )  {
        avatar = patrick
    } else {
        avatar = michael
    }

    // Handler to expand or contract the paragraph
    const paragraphContentHandler = () => {
        if (paragraphContent.indexOf(' ...') > -1) {
            setParagraphContent(data.testimonial)
        } else {
            setParagraphContent(data.testimonial.substring(0, 100) + ' ...');
        }
    };

    return (
        <div className="credentials__section credentials__section--testimonial">
            <h3>Patrick Moesick <small className="text-muted">- AteljeeVZW</small></h3>
            <div className="credentials__section__item mb-2">
                <p className="mb-0 lang" data-key="test1-text" onClick={() => paragraphContentHandler()}>
                    {paragraphContent}
                </p>
            </div>
            <div className="credentials__section__avatar">
                <img src={avatar} alt="Patrick Moesick" width="45px"/>
            </div>
        </div>
    )
};


// Exports
//////////

export default TestimonialItem;
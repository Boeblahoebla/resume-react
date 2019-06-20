// Imports
//////////

// Dependencies
import React, {useEffect, useState} from 'react';

// Media
import patrick from '../../../../images/patrick.png';
import michael from '../../../../images/michael.png'


// Component
////////////

const TestimonialItem = ({ testimonial, name, where }) => {

    // State
    const [paragraphContent, setParagraphContent] = useState(testimonial);
    const [expandContractClass, setExpandContractClass] = useState('expand');

    // When the component receives new props by switching the language,
    // reset the paragraphContent
    useEffect(() => {
        setParagraphContent(testimonial.substring(0, 125) + ' ...');
    }, [testimonial]);

    // Find the right avatar
    const avatar = (name.toLowerCase().indexOf('patrick') > -1 ) ? patrick : michael;

    // Handler to expand or contract the paragraph
    const paragraphContentHandler = () => {
        if (paragraphContent.indexOf(' ...') > -1) {
            setParagraphContent(testimonial);
            setExpandContractClass('contract');

        } else {
            setParagraphContent(testimonial.substring(0, 125) + ' ...');
            setExpandContractClass('expand');
        }
    };

    return (
        <div className="credentials__section credentials__section--testimonial">
            <h3>{name} <small className="text-muted">- {where}</small></h3>
            <div className="credentials__section__item">
                <p className={expandContractClass} data-key="test1-text" onClick={() => paragraphContentHandler()}>
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
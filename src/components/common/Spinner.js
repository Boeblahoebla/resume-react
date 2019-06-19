// Imports
//////////

// Dependencies
import React from 'react';

// Media
import spinner from '../../images/spinner.gif';

// Component
////////////

const Spinner = () => {
    return (
        <div id="spinner" className="text-center">
            <img src={spinner} alt="Loading icon" height="120px"/>
        </div>
    )
};


// Exports
//////////

export default Spinner;
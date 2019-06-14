// Imports
//////////

// Dependencies
import React from 'react';

// Components
import ResumeExpEdu from './resumeExpEdu/ResumeExpEdu';

// Styling
import '../../css/style.css';


// Component
////////////
const ResumeContent = ({ resumeData }) => {

    return (
        <div className="row">
            <ResumeExpEdu/>
        </div>
    )
};


// Exports
//////////

export default ResumeContent;
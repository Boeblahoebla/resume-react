// Imports
//////////

// Dependencies
import React from 'react';

// Components
import ResumeExperience from './ResumeExperience';
import ResumeEducation from './ResumeEducation';


// Component
////////////

const ResumeExpEdu = ({ resumeData }) => {
    return (
        <div className="col-12 col-lg-6">
            {/* Work Experience timeline */}
            <ResumeExperience/>
            {/* Education Experience timeline */}
            <ResumeEducation />
        </div>
    )
};


// Exports
//////////

export default ResumeExpEdu;
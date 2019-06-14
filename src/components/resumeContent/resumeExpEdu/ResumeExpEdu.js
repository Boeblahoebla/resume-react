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
            <div className="header header--work">
                <h1 className="display-4 lang" data-key="exp-header">
                    Ervaring
                </h1>
            </div>

            {/* Work Experience timeline */}
            <ResumeExperience/>

            {/* Education Experience header */}
            <div className="header header--edu">
                <h1 className="display-4 lang" data-key="edu-header">Education</h1>
            </div>

            {/* Education Experience timeline */}
            <ResumeEducation />
        </div>
    )
};


// Exports
//////////

export default ResumeExpEdu;
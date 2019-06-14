// Imports
//////////

// Dependencies
import React from 'react';

// Components
import ResumeExpEdu from './resumeExpEdu/ResumeExpEdu';
import ResumeSkillsTest from './resumeSkillsTest/ResumeSkillsTest';

// Styling
import '../../css/style.css';


// Component
////////////
const ResumeContent = ({ resumeData }) => {

    return (
        <div className="row">
            <ResumeExpEdu />
            <ResumeSkillsTest />
        </div>
    )
};


// Exports
//////////

export default ResumeContent;
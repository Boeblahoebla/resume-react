// Imports
//////////

// Dependencies
import React from 'react';

// Components
import ResumeSkills from './resumeSkills/ResumeSkills';
import ResumeLangs from './resumeLang/ResumeLangs';
import ResumeTest from './ResumeTest';


// Component
////////////

const ResumeSkillsTest = () => {
    return (
        <div className="col-12 col-lg-6">
            <ResumeSkills />
            <ResumeLangs />
            <ResumeTest />
        </div>
    )
};


// Exports
//////////

export default ResumeSkillsTest;
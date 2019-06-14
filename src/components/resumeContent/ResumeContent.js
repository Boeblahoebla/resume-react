// Imports
//////////

// Dependencies
import React, { useState } from 'react';

// Components
import ResumeExpEdu from './resumeExpEdu/ResumeExpEdu';
import ResumeSkillsTest from './resumeSkillsTest/ResumeSkillsTest';

// Media
import dutch from '../../images/dutch.png';
import english from '../../images/english.png';

// Styling
import '../../css/style.css';


// Component
////////////
const ResumeContent = ({ resumeData }) => {

    // Language state
    const [ lang, setLang ] = useState('nl');

    // Highlight the chose language
    let dutchHidden = '';
    let englishHidden = '';

    if (lang !== 'en') {
        englishHidden = 'hidden';
        dutchHidden = '';
    } else {
        englishHidden = '';
        dutchHidden = 'hidden';
    }

    // Choose the right language
    const dataInChosenLanguage = resumeData[lang];

    console.log(dataInChosenLanguage);

    return (
        <div className="row">
            <ResumeExpEdu />
            <ResumeSkillsTest />

            {/* Language switcher */}
            <div className="language-switcher">
                <button className={`translate ${dutchHidden}`} id="nl" onClick={() => setLang('nl')}>
                    <img src={dutch} alt="Dutch language"/>
                </button>
                <button className={`translate ${englishHidden}`} id="en" onClick={() => setLang('en')}>
                    <img src={english} alt="Dutch language"/>
                </button>
            </div>
        </div>
    )
};


// Exports
//////////

export default ResumeContent;
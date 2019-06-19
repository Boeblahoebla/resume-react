// Imports
//////////

// Dependencies
import React, {Fragment, useState} from 'react';

// Components
import TimeLines from './timelines/TimeLines';
import Credentials from './credentials/Credentials';
import LanguageSwitcher from '../langSwitcher/LanguageSwitcher';

// Styling
import '../../css/style.css';


// Component
////////////
const ResumeContent = ({ resumeData }) => {

    // Language state
    const [ lang, setLang ] = useState('nl');

    // Fetch the languages & skills from the resumeData
    const { languages, skills } = resumeData;

    // Language switch handler
    const changeLanguage = chosenLang => {
        setLang(chosenLang);
    };

    // Set the data in the chosen language
    const dataInChosenLanguage = resumeData[lang];

    return (
        <Fragment>
            <div className="row">
                <TimeLines
                    data={dataInChosenLanguage}/>
                <Credentials
                    data={dataInChosenLanguage}
                    skillSets={skills}
                    languages={languages}/>
            </div>

            {/* Language switcher */}
            <LanguageSwitcher setLang={changeLanguage} chosenLang={lang}/>
        </Fragment>

    )
};


// Exports
//////////

export default ResumeContent;
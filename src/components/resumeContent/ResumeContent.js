// Imports
//////////

// Dependencies
import React, {Fragment, useState} from 'react';

// Components
import TimeLines from './timelines/TimeLines';
import Credentials from './credentials/Credentials';
import LanguageSwitcher from '../LanguageSwitcher';

// Styling
import '../../css/style.css';


// Component
////////////
const ResumeContent = ({ resumeData }) => {

    // Language state
    const [ lang, setLang ] = useState('nl');

    // Language switch handler
    const changeLanguage = chosenLang => {
        setLang(chosenLang);
    };

    // Set the data in the chosen language
    const dataInChosenLanguage = resumeData[lang];

    return (
        <Fragment>
            <div className="row">
                <TimeLines data={dataInChosenLanguage}/>
                <Credentials data={dataInChosenLanguage}/>
            </div>

            {/* Language switcher */}
            <LanguageSwitcher setLang={changeLanguage} chosenLang={lang}/>
        </Fragment>

    )
};


// Exports
//////////

export default ResumeContent;
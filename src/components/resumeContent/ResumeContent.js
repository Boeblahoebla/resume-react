// Imports
//////////

// Dependencies
import React, {Fragment, useState} from 'react';

// Components
import TimeLines from './timelines/TimeLines';
import Credentials from './credentials/credentials';

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

    return (
        <Fragment>
            <div className="row">
                <TimeLines data={dataInChosenLanguage}/>
                <Credentials data={dataInChosenLanguage}/>
            </div>

            {/* Language switcher */}
            <div className="language-switcher">
                <button className={`translate ${dutchHidden}`} id="nl" onClick={() => setLang('nl')}>
                    <img src={dutch} alt="Dutch language"/>
                </button>
                <button className={`translate ${englishHidden}`} id="en" onClick={() => setLang('en')}>
                    <img src={english} alt="Dutch language"/>
                </button>
            </div>
        </Fragment>

    )
};


// Exports
//////////

export default ResumeContent;
// Imports
//////////

// Dependencies
import React from 'react';

// Media
import dutch from '../../images/dutch.png';
import english from '../../images/english.png';


// Component
////////////

const LanguageSwitcher = ({setLang, chosenLang}) => {

    // Highlight the chose language
    let dutchHidden = '';
    let englishHidden = '';

    if (chosenLang !== 'en') {
        englishHidden = 'hidden';
        dutchHidden = '';
    } else {
        englishHidden = '';
        dutchHidden = 'hidden';
    }

    return (
        <div className="language-switcher">
            <button className={`translate ${dutchHidden}`} id="nl" onClick={() => setLang('nl')}>
                <img src={dutch} alt="Dutch language"/>
            </button>
            <button className={`translate ${englishHidden}`} id="en" onClick={() => setLang('en')}>
                <img src={english} alt="Dutch language"/>
            </button>
        </div>
    )
};


// Exports
//////////

export default LanguageSwitcher;
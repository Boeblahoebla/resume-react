// Imports
//////////

// Dependencies
import React from 'react';

// Components
import ProgressItem from '../progress/ProgressItem'


// Component
////////////

const SkillSet = ({ progressSet }) => {
    return (
        <div className={`credentials__section credentials__section--${progressSet.flag}`}>
            <h3>{progressSet.field}</h3>
            {progressSet.scores.map((score, index) => (
                <ProgressItem topic={score.topic} score={score.score} key={index}/>
            ))}
        </div>
    )
};


// Exports
//////////

export default SkillSet;
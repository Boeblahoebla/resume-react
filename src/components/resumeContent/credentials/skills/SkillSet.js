// Imports
//////////

// Dependencies
import React from 'react';

// Components
import SkillItem from './SkillItem'


// Component
////////////

const SkillSet = ({skillSet}) => {
    return (
        <div className={`credentials__section credentials__section--${skillSet.flag}`}>
            <h3>{skillSet.field}</h3>
            {skillSet.scores.map((score, index) => (
                <SkillItem topic={score.topic} score={score.score} key={index}/>
            ))}
        </div>
    )
};


// Exports
//////////

export default SkillSet;
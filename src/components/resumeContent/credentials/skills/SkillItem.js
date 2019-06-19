// Imports
//////////

// Dependencies
import React, {Fragment} from 'react';


// Component
////////////

const SkillItem = ({topic, score}) => {

    // Find the right color for the progress bar
    let colorClass = '';
    if(score < 50) {
        colorClass = 'bg-secondary'
    } else if (score < 75) {
        colorClass = 'bg-info'
    } else {
        colorClass = 'bg-success'
    }

    return (
        <div className="credentials__section__item mb-2">
            <div className="credentials__section__item__text">{topic}</div>
            <div className="credentials__section__item__bar">
                <div
                    className={`text-center progress-bar progress-bar-striped ${colorClass} progress progress--${score}`}
                    role="progressbar" aria-valuenow={score} aria-valuemin="0" aria-valuemax="100">{score}%
                </div>
            </div>
        </div>
    )
};


// Exports
//////////

export default SkillItem;
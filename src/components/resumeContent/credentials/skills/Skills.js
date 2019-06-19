// Imports
//////////

// Dependencies
import React, { Fragment } from 'react';

// Components
import SkillSet from './SkillSet'


// Component
////////////

const Skills = ({ data, skillSets }) => {

    // Generate skills
    const skillContent = skillSets.map((skillSet, index) => (
        <SkillSet skillSet={skillSet} flag={skillSet.flag} key={index}/>
    ));

    return (
        <Fragment>
            {/* Skillsets header */}
            <div className="header header--credentials text-center">
                <h1 className="display-4">Skillset</h1>
            </div>

            {/* Skillsets */}
            <div className="credentials">
                {skillContent}
            </div>

        </Fragment>
    )
};


// Exports
//////////

export default Skills;
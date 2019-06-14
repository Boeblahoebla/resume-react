// Imports
//////////

// Dependencies
import React from 'react';

// Media
import student from '../images/student.svg';

// Component
////////////

const Header = () => {
    return (
        <div className="row text-center mb-4">
            <div className="col-12">
                <div className="avatar mb-2">
                    <img src={student} alt="Student avatar" height="200px"/>
                </div>
                <div className="badge badge-warning p-2 mb-2">Web Developer</div>
                <div>
                    <p className="lead">Dzengiz Tafa</p>
                </div>
            </div>
        </div>
    )
};


// Exports
//////////

export default Header;
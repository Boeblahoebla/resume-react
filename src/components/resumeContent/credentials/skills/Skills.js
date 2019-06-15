// Imports
//////////

// Dependencies
import React, { Fragment } from 'react';


// Component
////////////

const Skills = () => {
    return (
        <Fragment>
            {/* Skillsets header */}
            <div className="header header--credentials text-center">
                <h1 className="display-4">Skillset</h1>
            </div>

            {/* Skillsets */}
            <div className="credentials">
                {/* Frontend development skills */}
                <div className="credentials__section credentials__section--web">
                    <h3>Frontend development</h3>
                    <div className="credentials__section__item mb-2">
                        <div className="credentials__section__item__text">HTML5</div>
                        <div className="credentials__section__item__bar">
                            <div
                                className="text-center progress-bar progress-bar-striped bg-success progress progress--80"
                                role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%
                            </div>
                        </div>
                    </div>
                    <div className="credentials__section__item mb-2">
                        <div className="credentials__section__item__text">CSS</div>
                        <div className="credentials__section__item__bar">
                            <div
                                className="text-center progress-bar progress-bar-striped bg-success progress progress--75"
                                role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%
                            </div>
                        </div>
                    </div>
                    <div className="credentials__section__item mb-2">
                        <div className="credentials__section__item__text">SCSS</div>
                        <div className="credentials__section__item__bar">
                            <div className="text-center progress-bar progress-bar-striped bg-info progress progress--70"
                                 role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%
                            </div>
                        </div>
                    </div>
                    <div className="credentials__section__item mb-2">
                        <div className="credentials__section__item__text">Bootstrap</div>
                        <div className="credentials__section__item__bar">
                            <div
                                className="text-center progress-bar progress-bar-striped bg-success progress progress--80"
                                role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%
                            </div>
                        </div>
                    </div>
                    <div className="credentials__section__item mb-2">
                        <div className="credentials__section__item__text">Javascript</div>
                        <div className="credentials__section__item__bar">
                            <div
                                className="text-center progress-bar progress-bar-striped bg-success progress progress--75"
                                role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%
                            </div>
                        </div>
                    </div>
                </div>

                {/* Frontend framework skills */}
                <div className="credentials__section credentials__section--web">
                    <h3>Frontend frameworks</h3>
                    <div className="credentials__section__item mb-2">
                        <div className="credentials__section__item__text">React</div>
                        <div className="credentials__section__item__bar">
                            <div
                                className="text-center progress-bar progress-bar-striped bg-success progress progress--75"
                                role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%
                            </div>
                        </div>
                    </div>
                    <div className="credentials__section__item mb-2">
                        <div className="credentials__section__item__text">Redux</div>
                        <div className="credentials__section__item__bar">
                            <div
                                className="text-center progress-bar progress-bar-striped bg-success progress progress--75"
                                role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile development skills */}
                <div className="credentials__section credentials__section--mobile">
                    <h3>Mobile development</h3>
                    <div className="credentials__section__item mb-2">
                        <div className="credentials__section__item__text">Android Studio</div>
                        <div className="credentials__section__item__bar">
                            <div
                                className="text-center progress-bar progress-bar-striped bg-success progress progress--75"
                                role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%
                            </div>
                        </div>
                    </div>
                    <div className="credentials__section__item mb-2">
                        <div className="credentials__section__item__text">Cordova</div>
                        <div className="credentials__section__item__bar">
                            <div className="text-center progress-bar progress-bar-striped bg-info progress progress--70"
                                 role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%
                            </div>
                        </div>
                    </div>
                </div>

                {/* Database management skills */}
                <div className="credentials__section credentials__section--db">
                    <h3>Databases</h3>
                    <div className="credentials__section__item mb-2">
                        <div className="credentials__section__item__text">SQL</div>
                        <div className="credentials__section__item__bar">
                            <div
                                className="text-center progress-bar progress-bar-striped bg-success progress progress--80"
                                role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%
                            </div>
                        </div>
                    </div>
                    <div className="credentials__section__item mb-2">
                        <div className="credentials__section__item__text">MongoDB</div>
                        <div className="credentials__section__item__bar">
                            <div
                                className="text-center progress-bar progress-bar-striped bg-success progress progress--75"
                                role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%
                            </div>
                        </div>
                    </div>
                </div>

                {/* Backend development skills */}
                <div className="credentials__section credentials__section--backend">
                    <h3>Backend development</h3>
                    <div className="credentials__section__item mb-2">
                        <div className="credentials__section__item__text">NodeJS</div>
                        <div className="credentials__section__item__bar">
                            <div
                                className="text-center progress-bar progress-bar-striped bg-success progress progress--80"
                                role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%
                            </div>
                        </div>
                    </div>
                    <div className="credentials__section__item mb-2">
                        <div className="credentials__section__item__text">Express</div>
                        <div className="credentials__section__item__bar">
                            <div
                                className="text-center progress-bar progress-bar-striped bg-success progress progress--75"
                                role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dev-ops skills */}
                <div className="credentials__section credentials__section--devops">
                    <h3>Dev-ops</h3>
                    <div className="credentials__section__item mb-2">
                        <div className="credentials__section__item__text">Linux</div>
                        <div className="credentials__section__item__bar">
                            <div className="text-center progress-bar progress-bar-striped bg-info progress progress--60"
                                 role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%
                            </div>
                        </div>
                    </div>
                    <div className="credentials__section__item mb-2">
                        <div className="credentials__section__item__text">Apache</div>
                        <div className="credentials__section__item__bar">
                            <div className="text-center progress-bar progress-bar-striped bg-info progress progress--50"
                                 role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%
                            </div>
                        </div>
                    </div>
                    <div className="credentials__section__item mb-2">
                        <div className="credentials__section__item__text">Docker</div>
                        <div className="credentials__section__item__bar">
                            <div
                                className="text-center progress-bar progress-bar-striped bg-secondary progress progress--35"
                                role="progressbar" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">35%
                            </div>
                        </div>
                    </div>
                    <div className="credentials__section__item mb-2">
                        <div className="credentials__section__item__text">Vagrant</div>
                        <div className="credentials__section__item__bar">
                            <div
                                className="text-center progress-bar progress-bar-striped bg-secondary progress progress--35"
                                role="progressbar" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">35%
                            </div>
                        </div>
                    </div>
                    <div className="credentials__section__item mb-2">
                        <div className="credentials__section__item__text">Bash</div>
                        <div className="credentials__section__item__bar">
                            <div className="text-center progress-bar progress-bar-striped bg-info progress progress--70"
                                 role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%
                            </div>
                        </div>
                    </div>
                    <div className="credentials__section__item mb-2">
                        <div className="credentials__section__item__text">Python</div>
                        <div className="credentials__section__item__bar">
                            <div
                                className="text-center progress-bar progress-bar-striped bg-success progress progress--75"
                                role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
};


// Exports
//////////

export default Skills;
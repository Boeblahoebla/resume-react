// Imports
//////////

// Dependencies
import React, { useState, useEffect } from 'react';

// Components
import InfoItem from '../info/InfoItem';


// Component
////////////

const InfoModal = ({ data }) => {

    // State
    const [ modalData, setModalData ] = useState(data);

    // When the modal receives new props, reset its content
    useEffect(() => {
        setModalData(data)
    }, [data]);

    // Fetch the personal object from the modalData
    const { personal } = modalData;

    return (
        <div
            className="modal fade"
            id="infoModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="infoModalLabel"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    {/* Modal header */}
                    <div className="modal-header">
                        <h5 className="modal-title" id="infoModalLabel">
                            { personal.header }
                        </h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    {/* Modal body */}
                    <div className="modal-body">
                        <div className="info">
                            {/* Persoonlijke info */}
                            <div className="info__section info__section--personal">
                                <h5>{ personal.personal }</h5>
                                    {/* Full name */}
                                    <InfoItem icon="fas fa-user" text="Dzengiz Tafa"/>
                                    {/* Age */}
                                    <InfoItem icon="fas fa-baby-carriage" text="37"/>
                                    {/* Marital status */}
                                    <InfoItem icon="fas fa-female" text={personal.marital}/>
                            </div>

                            {/* Address & location */}
                            <div className="info__section info__section--location">
                                <h5>{ personal.location }</h5>
                                    {/* Address */}
                                    <InfoItem icon="fas fa-home" text="Hospitaalstraat 5, bus 6"/>
                                    {/* Location */}
                                    <InfoItem icon="fas fa-map-marker-alt" text="9900 Eeklo"/>
                            </div>

                            {/* Contact information */}
                            <div className="info__section info__section--contact">
                                <h5>{ personal.contact }</h5>
                                {/* Phone */}
                                <InfoItem icon="fas fa-envelope" text="dzengiz.tafa@gmail.com"/>
                                {/* Email */}
                                <InfoItem icon="fas fa-phone" text="0496 20 42 94"/>

                            </div>

                            <div className="info__section info__section--resume">
                                <h5>{ personal.resume }</h5>
                                {/* Download resume Button */}
                                <div className="info__section__content__item info__section__content__item--download">
                                    <a
                                        href={`files/${personal.resumeLink}`}
                                        className="btn btn-outline-secondary" target="_blank" rel="noopener noreferrer">
                                            { personal.resumeText }
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Modal footer */}
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-info"
                            data-dismiss="modal">
                                Sluiten
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
};


// Exports
//////////

export default InfoModal;
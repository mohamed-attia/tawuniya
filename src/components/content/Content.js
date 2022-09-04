import { useTranslation } from 'react-i18next';
import './content.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation, faFile } from '@fortawesome/free-solid-svg-icons'

export default function Content() {
    const [t, i18n] = useTranslation()


    return (
        <>
            <div className='content p-3'>
                <div className='content-header'>
                    <h2>Health Declaration</h2>
                    <p>Tell us about your Employee’s health</p>
                </div>

                <div className='content-body'>
                    <div className='content-body-title'>
                        <FontAwesomeIcon icon={faFile} />
                        <h3 className='p-2'>Pregnant Femails only</h3>
                    </div>
                    <div className='content-body-item'>
                        <div className="form-check form-switch">
                            <input className={"form-check-input " + (i18n.language == 'ar' ? ' form-check-input-ltr' : 'null')} type="checkbox" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" >Current Single Pregnancy</label>
                        </div>
                    </div>
                    <div className='content-body-item'>
                        <div className="form-check form-switch">
                            <input className={"form-check-input " + (i18n.language == 'ar' ? ' form-check-input-ltr' : 'null')} type="checkbox" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" >Current Single Pregnancy</label>
                        </div>
                    </div>
                    <div className='content-body-item'>
                        <div className="form-check form-switch">
                            <input className={"form-check-input " + (i18n.language == 'ar' ? ' form-check-input-ltr' : 'null')} type="checkbox" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" >Current Single Pregnancy</label>
                        </div>
                    </div>
                </div>

                <div className='content-body'>
                    <div className='content-body-title'>
                        <FontAwesomeIcon icon={faFile} />
                        <h3 className='p-2'>Pregnant Femails only</h3>
                    </div>
                    <div className='content-body-item'>
                        <div className="form-check form-switch">
                            <input className={"form-check-input " + (i18n.language == 'ar' ? ' form-check-input-ltr' : 'null')} type="checkbox" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" >Current Single Pregnancy</label>
                        </div>
                    </div>
                    <div className='content-body-item'>
                        <div className="form-check form-switch">
                            <input className={"form-check-input " + (i18n.language == 'ar' ? ' form-check-input-ltr' : 'null')} type="checkbox" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" >Current Single Pregnancy</label>
                        </div>
                    </div>
                    <div className='content-body-item'>
                        <div className="form-check form-switch">
                            <input className={"form-check-input " + (i18n.language == 'ar' ? ' form-check-input-ltr' : 'null')} type="checkbox" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" >Current Single Pregnancy</label>
                        </div>
                    </div>
                </div>

                <div className='content-body'>
                    <div className='content-body-title title-border'>
                        <FontAwesomeIcon icon={faFile} />
                        <h3 className='p-2'>Pregnant Femails only</h3>
                    </div>
                    <div className='item-check'>
                        <div className='item-check-title'>
                            <h3>Do the additive have excessive obesity?</h3>
                        </div>
                        <div className='item-checks'>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled />
                                <label className="form-check-label" >
                                    Yes
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" checked disabled />
                                <label className="form-check-label" >
                                    No
                                </label>
                            </div>

                        </div>
                        <div className='warning-tip'>
                            <FontAwesomeIcon icon={faTriangleExclamation} />
                            <p>If you don’t disclose this will not cover the surgical costs</p>
                        </div>
                    </div>

                </div>

                <div className='agreement'>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" >
                        I agree to the <span>Undertakings</span> , and I acknowledge that this electronic choice serves as a signature on the completeness and validity of the above information that I have filled out, and I pledge that all medical declarations have been filled out with reference to the employee of the same relationship and that is according to the instructions of the Council of Cooperative Health Insurance for the purpose of pricing in the correct manner and to ensure access to services Health care as required.

                        </label>
                    </div>

                </div>
            </div>


        </>
    )
}

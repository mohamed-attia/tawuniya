import { useTranslation } from 'react-i18next'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faPhoneVolume, faEye, faMagnifyingGlass, faEarthAmericas } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    const [t, i18n] = useTranslation()


    return (
        <>
            <div className='header-mobile'>
                <div className='wizard-mobile'>
                    <span className='counter'>4</span>
                    <span className='title'>Policy</span>
                    <div className="progress">
                        <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span className='steps'>3of4</span>
                </div>
                <div className='content-dt'>
                    <button className="btn btn-primary ">
                        continu from desktop
                    </button>
                </div>
            </div>

            <div className='header'>
                <div className='help-btn'>
                    <span>{t('header.help')}</span>
                    <FontAwesomeIcon className='fa-thin' icon={faCircleInfo} />
                </div>
                <div className='icons'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faPhoneVolume} />
                    </div>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faEye} />
                    </div>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </div>
                <div className='change-lang'>
                    {i18n.language == 'en' && <button className="btn" onClick={() => { i18n.changeLanguage('ar') }}>Ar</button>}
                    {i18n.language == 'ar' && <button className="btn" onClick={() => { i18n.changeLanguage('en') }}>En</button>}
                    <FontAwesomeIcon icon={faEarthAmericas} />
                </div>
            </div>
        </>
    )
}

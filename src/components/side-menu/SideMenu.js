import { useTranslation } from 'react-i18next';
import './side-menu.css'
import logo from '../../assets/logo.svg';
import productImg from '../../assets/product-card.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft,faAppleWhole, faPlay } from '@fortawesome/free-solid-svg-icons'

export default function SideMenu() {
    const [t, i18n] = useTranslation()

    return (
        <div  className={"side-menu " + (i18n.language == 'ar' ? ' side-menu-rtl' : 'null')}>
            <div className='side-menu-header'>
                <div className='logo-section'>
                    <img src={logo} alt="..." />
                    <div className='logo-content'>
                        <h4>SME Health Insurance</h4>
                        <span>
                            <FontAwesomeIcon icon={faArrowLeft} />
                            show all
                        </span>
                    </div>
                </div>
                <div className='user-name'>
                    AA
                </div>
            </div>
            <div className='wizard'>
                <div className="vrtwiz">
                    <ul className="verticalwiz">
                        <li className="active" data-target="#step1">
                            <a href="#tab1" data-toggle="tab" className="active"> <span className="step">1</span> <span className="title">{t('wizard.registeration')}</span> </a>
                        </li>
                        <li data-target="#step2" className="">
                            <a href="#tab2" data-toggle="tab"> <span className="step">2</span> <span className="title">{t('wizard.members-details')}</span> </a>
                        </li>
                        <li data-target="#step3" className="">
                            <a href="#tab3" data-toggle="tab"> <span className="step">3</span> <span className="title">{t('wizard.Policy')}</span> </a>
                        </li>
                        <li data-target="#step4">
                            <a href="#tab4" data-toggle="tab"> <span className="step">4</span> <span className="title">{t('wizard.payment')}</span> </a>
                        </li>
                    </ul>
                    <div className="clearfix"></div>
                </div>
            </div>
            <div className='slider'>
                <img src={productImg} />
            </div>
            <div className='contact'>
                <div className='copyright'>
                    <p>Copyright © Tawuniya 2022, all rights reserved</p>
                </div>
                <div className='terms'>
                    <p>Terms and Conditions    Privacy Policy    Cookie Policy</p>
                </div>
                <div className='stores'>
                    <div className='store'>
                    <FontAwesomeIcon icon={faAppleWhole} />
                    </div>
                    <div className='store'>
                    <FontAwesomeIcon icon={faPlay} />
                    </div>
                    <div className='store'>
                    <FontAwesomeIcon icon={faAppleWhole} />
                    </div>
                </div>
            </div>
        </div>
    )
}

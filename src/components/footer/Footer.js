import { useTranslation } from 'react-i18next'
import './footer.css'
export default function Footer
    () {
    const [t, i18n] = useTranslation()


    return (
        <div className='footer'>
            <button className="btn btn-outline-primary" >Back</button>
            <button className="btn btn-primary" >Next</button>
        </div>
    )
}

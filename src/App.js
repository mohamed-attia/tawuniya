
import { useTranslation } from 'react-i18next'
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import SideMenu from './components/side-menu/SideMenu';

function App() {
  const [title, i18n] = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <div className='row m-0' >

      <div className='col-12 col-sm-3 p-0 side-menu-component'>
        <SideMenu />
      </div>

      <div className='col-12 col-xs-9 col-sm-9'>
        <div className='row'>

          <div className='col-12'>
            <Header />
          </div>

          <div className='col-sm-10 col-xs-12 container'>
              <Content />
          </div>

          <div className='col-12'>
            <Footer />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;

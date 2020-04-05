import React from "react"
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '../components/Button'
import '../../static/styles/header-menu.scss'
import '../../static/styles/Drawer.scss'
import '../../static/styles/font.scss'
export default (props) => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
      const toggleDrawer = (anchor, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
    };
    const list = anchor => (
        <div
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <div className="drawer-container">
            <div className="drawer-close_button">
              <img src={"/drawer-close-button.png"} alt="close"/>
            </div>
            <div className="drawer-list">
            {['Главная', 'Услуги', 'Врачи', 'Блог', 'Отзывы','Вакансии','Контакты','Прайс-лист', 'Документы компании'].map((text, index) => (
                <p className="drawer-list-element">{text}</p>  
            ))}
            </div>
            <div style={{marginTop: '33px'}} onClick={event => {
                        }}><Button color="white" text="ЗАПИСАТЬСЯ"/></div>
            <div className="header-menu_basic-info_tel--drawer">
                   <img src={"/tel.png"} alt="logo"/>
                   <p>+7 980 540 04 24</p>
            </div>
            <div className="header-menu_basic-info_time--drawer">
                   <img src={"/time.png"} alt="logo"/>
                   <p>9:00 - 21:00</p>
            </div>
          </div>
        </div>
      );
    return (
        <div className="header-menu" >
           <img src={"/art_logo.png"} alt="logo"/>
           <div className="header-menu_basic-info">
               <div className="header-menu_basic-info_time">
                   <img src={"/time.png"} alt="logo"/>
                   <p>9:00 - 21:00</p>
               </div>
               <div className="header-menu_basic-info_tel">
                   <img src={"/tel.png"} alt="logo"/>
                   <p>+7 980 540 04 24</p>
               </div>
               <div className="header-menu_button" onClick={toggleDrawer('right', true)}>МЕНЮ</div>
           </div>
           <SwipeableDrawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
            onOpen={toggleDrawer('right', true)}
          >
            {list('right')}
          </SwipeableDrawer>
        </div>
    )
}



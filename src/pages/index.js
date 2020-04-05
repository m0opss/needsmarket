import React from "react"

import '../../static/styles/font.scss'
import '../../static/styles/index-page.scss'
import Button from '../components/Button'
import TopMenu from "../components/TopMenu"
import { navigate } from "gatsby"


export default () => {
    return (
        <div>
            <TopMenu/>
            <div className="art-header">
                <div className="art-header_left">
                    <p className="art-header_left_first-paragraph">Прогрессивная стоматология АртДенталь</p>
                    <h1>Ваша модная клиника креативных стоматологов</h1>
                    <div className="art-header_left_buttons">
                        <div onClick={event => {
                        event.preventDefault()
                        navigate("/")}}><Button color="blue" text="ВЫБРАТЬ УСЛУГУ"/></div>
                    <div onClick={event => {
                        event.preventDefault()
                        window.history.go(-1)}}><Button color="white" text="ЗАПИСАТЬСЯ"/></div>
                    </div>
                    <p className="art-header_left_second-paragraph">Для специалистов клиники «АртДенталь», врачей в нескольких поколениях, каждый рабочий день – это возможность сделать 
вас счастливее и успешнее.</p>
                </div>
                <div className="art-header_right">
                    <img src="/header-right.png" alt="header right img"/>
                </div>
            </div>
            <h1 style={{marginTop: '125px',marginLeft: '153px', fontFamily: 'Podkova',fontStyle: 'normal',fontWeight: 'bold',fontSize: '42px',lineHeight: '47px'}}>Почему мы?</h1>
            <div className="why-info">
                
                <div className="why-info_block">
                    <div className="why-info_block_main"><p>Наша миссия - раскрыть красоту каждого пациента через восстановление его здоровья не только 
полости рта, но и организма в целом.</p></div>
                    <div className="why-info_block_cards">
                        <div className="why-info_block_cards_red"><p>Нормализуем работу всей челюстной системы.</p></div>
                        <div className="why-info_block_cards_yellow"><p>Наши врачи - ведующие специалисты страны.</p></div>
                        <div className="why-info_block_cards_blue"><p>Мы используем только профессиональное оборудование.</p></div>
                    </div>
                </div>
            </div>
            <h1 style={{marginTop: '125px',marginLeft: '153px', fontFamily: 'Podkova',fontStyle: 'normal',fontWeight: 'bold',fontSize: '42px',lineHeight: '47px'}}>Акции</h1>
            
        </div>
    )
}

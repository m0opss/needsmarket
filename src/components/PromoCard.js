import React from "react"
import '../../static/styles/PromoCard.scss'
import Button from './Button'
export default (props) => {
    return (
        <div className={"promo-card"} >
            <h1>{props.name}</h1>
            <p className="promo-card_first-paragraph">{props.firstPar}</p>
            <div style={{maxWidth:'230px'}} onClick={event => {
                        event.preventDefault();
                        window.history.go(-1)}}><Button marginLeft='0' style={{height: '40px', fontWeight: 'bold'}} color="white" text={'Стоимость '+props.price}/></div>
            <p className="promo-card_second-paragraph">{props.secondPar}</p>
            <p className="promo-card_info">{props.info}</p>
        </div>
    )
}

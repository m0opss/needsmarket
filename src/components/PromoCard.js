import React from "react"
import '../../static/styles/PromoCard.scss'
export default (props) => {
    return (
        <div className={"promo-card"} >
            <h1>{props.name}</h1>
            <p className="promo-card_first-paragraph">{props.firstPar}</p>
            <div></div>
            <p className="promo-card_second-paragraph">{props.secondPar}</p>
            <p className="promo-card_info">{props.info}</p>
        </div>
    )
}

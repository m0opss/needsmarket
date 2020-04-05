import React from "react"
import '../../static/styles/Button.scss'
export default (props) => {
    return (
        <div className={props.color === "blue" ? "page404-button page404-button--blue" : "page404-button page404-button--white"} >
            {props.text}
        </div>
    )
}

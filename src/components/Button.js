import React from "react"
import '../../static/styles/Button.scss'
export default (props) => {
    if(props.marginLeft === '0'){
        return (
            <div style={{marginLeft: '0px'}} className={props.color === "blue" ? "page404-button page404-button--blue" : "page404-button page404-button--white"} >
                {props.text}
            </div>
        )
    }
    else return (
        <div className={props.color === "blue" ? "page404-button page404-button--blue" : "page404-button page404-button--white"} >
                {props.text}
            </div>
    )
    
}

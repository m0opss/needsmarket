import React from "react"
import { navigate } from "gatsby"
import '../../static/styles/font.scss'
import '../../static/styles/404.scss'
import Button from '../components/Button'

export default () => {
    return (
        <div className="page-404_container">
            <img src={"/logo.png"} alt="logo"/>
            <p>Страница не найдена</p>
            <div className="page-404_info">
                <h1>404 page not found</h1>
                <p>Упс, кажется страницы не существет или находится в стадии 
                    разработки! Ничего страшного, вы всегда можете вернуться!</p>
            </div>
            <div className="page-404_buttons">
                <div onClick={event => {
                    event.preventDefault()
                    navigate("/")}}><Button color="blue" text="НА ГЛАВНУЮ"/></div>
                <div onClick={event => {
                    event.preventDefault()
                    window.history.go(-1)}}><Button color="white" text="НАЗАД"/></div>
            </div>
        </div>
    )
}


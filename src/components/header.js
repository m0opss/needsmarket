import React from "react";

import '../styles/header.scss'

export default () => (
  <nav className="top-menu">

    <div className="top-menu_item -logo">
      <a href='#'>
        <img src="/images/logo.png" alt="" width='120px' height='40px' />
      </a>
    </div>

    <div className="top-menu_item -address">
      <a href='#'>
        <img src="/images/geo.png" alt="" width='15px' height='19px'/>
        <p>Адрес доставки</p>
      </a>
    </div>
    <div className="top-menu_composition">
      <div className="top-menu_item -account">
        <a href='#'>
          <img src="/images/account.png" alt="" width='16px' height='17px'/>
          <p>Войти</p>
        </a>
      </div>

      <div className="top-menu_item -basket">
        <a href='#'>
          <img src="/images/basket.png" alt="" width='16px' height='17px'/>
          <p>Корзина</p>
        </a>
      </div>
    </div>
  </nav>

);
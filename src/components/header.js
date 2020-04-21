import React from "react";

import '../styles/header.scss'


let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("top-menu").style.top = "0";
  } else {
    document.getElementById("top-menu").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}


export default () => (
  <nav id="top-menu">

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
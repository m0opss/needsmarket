import React from "react";

import '../styles/good_item.scss'

export default (props) => (
  <div className="good-item_container">
    <img src={ props.bgImg } alt=""/>
    <div className="good-item_info">
      <h1>{ props.goodName }</h1>
      <button className="category-item_button">
        { props.price } руб/кг
      </button>
    </div>
  </div>
);
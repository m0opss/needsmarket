import React from "react";

import '../styles/category_item.scss'

export default (props) => (
  <div className="item-container">
    <img src={ props.bgImg } alt=""/>
    <div className="item-info">
      <h1>{ props.categoryName }</h1>
      <div className="count">
        { props.count } товаров
      </div>
    </div>
  </div>
);

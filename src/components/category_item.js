import React from "react";

import '../styles/category_item.scss'

export default (props) => (
  <div className="category-item_container">
    <img src={ props.bgImg } alt=""/>
    <div className="category-item_info">
      <h1>{ props.categoryName }</h1>
      <div className="category-item_count">
        { props.count } товаров
      </div>
    </div>
  </div>
);

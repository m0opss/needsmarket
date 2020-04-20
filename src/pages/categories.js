import React from "react"

import Layout from '../components/layout'
import CategoryItem from '../components/category_item'
import '../styles/categories.scss'


export default () => (
  <Layout>
    <div className="container">
      <h1 className="choose">Выберите категорию</h1>
      <div class="search-item">
        <label htmlFor="search-item_input">или воспользуйтесь поиском товара:</label>
        <input type="text" className='search-item_input' placeholder="Введите товар..."/>
      </div>
      <div className="categories_box">
        <CategoryItem bgImg='/images/testCategory.png' categoryName='Овощи' count='55'/>
        <CategoryItem bgImg='/images/testCategory.png' categoryName='aaaqqss aaaaaaaasasa' count='55'/>
        <CategoryItem bgImg='/images/testCategory.png' categoryName='О' count='55'/>

        
      </div>
    </div>
  </Layout>
);
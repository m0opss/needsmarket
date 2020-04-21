import React from "react"

import Layout from '../components/layout'
import GoodItem from '../components/good_item'
import '../styles/goods.scss'


export default () => (
  <Layout>
    <div className="wrapper">
      <div className="container">
        <h1 className="choose">Выберите товар</h1>
        <div class="search-item">
          <label htmlFor="search-item_input">или воспользуйтесь поиском товара:</label>
          <input type="text" className='search-item_input' placeholder="Введите товар..."/>
        </div>
        <div className="items_box">
          <GoodItem bgImg='/images/testGood.png' goodName='Бананы bp Fdcnhfkbb' price='155'/>
          <GoodItem bgImg='/images/testGood.png' goodName='Бананы' price='155'/>
          <GoodItem bgImg='/images/testGood.png' goodName='Бананы' price='155'/>
          <GoodItem bgImg='/images/testGood.png' goodName='Бананы' price='155'/>
          <GoodItem bgImg='/images/testGood.png' goodName='Бананы' price='155'/>
          <GoodItem bgImg='/images/testGood.png' goodName='Бананы' price='155'/>
          <GoodItem bgImg='/images/testGood.png' goodName='Бананы' price='155'/>
          <GoodItem bgImg='/images/testGood.png' goodName='Бананы' price='155'/>
          <GoodItem bgImg='/images/testGood.png' goodName='Бананы' price='155'/>
          <GoodItem bgImg='/images/testGood.png' goodName='Бананы' price='155'/>
          <GoodItem bgImg='/images/testGood.png' goodName='Бананы' price='155'/>
          <GoodItem bgImg='/images/testGood.png' goodName='Бананы' price='155'/>
          <GoodItem bgImg='/images/testGood.png' goodName='Бананы' price='155'/>
          <GoodItem bgImg='/images/testGood.png' goodName='Бананы' price='155'/>
          <GoodItem bgImg='/images/testGood.png' goodName='Бананы' price='155'/>
          
        </div>
      </div>
    </div>
  </Layout>
);
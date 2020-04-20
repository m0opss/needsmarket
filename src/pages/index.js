import React from "react"

import Layout from '../components/layout'
import '../styles/main.scss'


export default () => (
  <Layout>
    <div className="main-wrapper">
      <div className="main-composition">
        <img src="/main-logo.png" alt=""  width='210px' height='207px'/>
        <div className="">
          <p>Свежие фрукты и овощи<br /> прямо до вашей двери</p>
          <button onclick="location.href='#'">Перейти к покупкам</button>
        </div>
      </div>
    </div>
    
  </Layout>
);

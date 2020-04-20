import React from "react";

import '../styles/footer.scss'

export default () => (
  <div className="footer-wrapper">
    <div className="footer-logo">
      <a href='#'>
        <img src="/images/logo.png" alt="" width='120px' height='40px' />
      </a>
    </div>
    <div className="store-composition">
      <div className='apps -google' onclick="location.href='#'"></div>
      <div className='apps -apple' onclick="location.href='#'"></div>
    </div>
  </div>
);
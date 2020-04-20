import React from "react";
import { Helmet } from 'react-helmet'

import Header from "./header";
import Footer from "./footer";

export default ({ children }) => (
  <>
    <Helmet>
      <meta name="viewport" content="width=device-width" />
    </Helmet>
    <Header />
    {children}
    <Footer />
  </>
);
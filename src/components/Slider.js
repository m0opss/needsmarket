import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";


const promoMass = [{
    name: 'Сертификат другу',
    firstPar: 'Професссиональная гигиена полости рта',
    price: '6 780 р.',
    secondPar: 'раздели с другом',
    info: '*Услугой могут воспользоваться несколько человек, услуги деляться между ними.'
},
{
    name: 'Сертификат другу 2',
    firstPar: 'Професссиональная гигиена полости рта',
    price: '6 780 р.',
    secondPar: 'раздели с другом',
    info: '*Услугой могут воспользоваться несколько человек, услуги деляться между ними.'
}]
class MyCarousel extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "100vh",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle"
    };
  }

  static get CARD_STYLE() {
    return {
      height: "200px",
      width: "200px",
      paddingTop: "80px",
      textAlign: "center",
      background: "#52C0F5",
      color: "#FFF",
      fontFamily: "sans-serif",
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "10px",
      boxSizing: "border-box"
    };
  }

  render() {
    return (
      <div style={MyCarousel.CONTAINER_STYLE}>
        <ReactCardCarousel autoplay={false} disable_box_shadow={true}>
          <div style={MyCarousel.CARD_STYLE}>First Card</div>
          <div style={MyCarousel.CARD_STYLE}>Second Card</div>
          <div style={MyCarousel.CARD_STYLE}>Third Card</div>
          <div style={MyCarousel.CARD_STYLE}>Fourth Card</div>
          <div style={MyCarousel.CARD_STYLE}>Fifth Card</div>
        </ReactCardCarousel>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<MyCarousel />, rootElement);

import React, { Component } from "react";
import ReactCardCarousel from "react-card-carousel";
import PromoCard from '../components/PromoCard';
import '../../static/styles/Arrow.scss'


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
},
{
    name: 'Сертификат другу 3',
    firstPar: 'Професссиональная гигиена полости рта',
    price: '6 780 р.',
    secondPar: 'раздели с другом',
    info: '*Услугой могут воспользоваться несколько человек, услуги деляться между ними.'
}]
export default class MyCarousel extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "500px",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle"
    };
  }
  static get ARROW_LEFT_STYLE() {
    return {
      position: "absolute",
      top: '37%',
      left: '11%',
      height: "26px",
      width: "26px",
    };
  }
  static get ARROW_RIGHT_STYLE() {
    return {
        position: "absolute",
        top: '40%',
        right: '16%',
        height: "26px",
        width: "26px",
    };
  }

  render() {
    return (
      <div style={MyCarousel.CONTAINER_STYLE}>
        <ReactCardCarousel autoplay={false} disable_box_shadow={true} spread={'wide'} disable_keydown={true} ref={ Carousel => this.Carousel = Carousel }>
        {promoMass.map((el, index) => (
                <PromoCard name={el.name} firstPar={el.firstPar} price={el.price} secondPar={el.secondPar} info={el.info} /> 
            ))}
        </ReactCardCarousel>
        <img style={MyCarousel.ARROW_LEFT_STYLE} src={'./left-arrow.png'} onClick={() => this.Carousel.prev()} className="arrow-left"/>
        <img style={MyCarousel.ARROW_RIGHT_STYLE} src={'./right-arrow.png'} onClick={() => this.Carousel.next()} className="arrow-right"/>
      </div>
    );
  }
}


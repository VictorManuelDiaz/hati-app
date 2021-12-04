import React from 'react';
import SliderView from './slider.view';

class Slider extends React.Component{
  state = {
    active: 0,
    images: [
      'https://image.freepik.com/vector-gratis/concepto-violencia-genero_23-2148607773.jpg',
      'https://image.freepik.com/vector-gratis/detener-concepto-violencia-genero_23-2148581693.jpg',
      'https://image.freepik.com/foto-gratis/violencia-fisica-domestica_155003-26348.jpg',
      'https://image.freepik.com/foto-gratis/mano-nina-oscuridad_127220-3.jpg',
      'https://image.freepik.com/foto-gratis/nina-triste-asustada-ojos-inyectados-sangre-amoratados-falsa-sonrisa-boca_155003-27671.jpg'
    ]
  }

  change =({nativeEvent})=>{
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if(slide !== this.state.active){
      this.setState({active: slide});
    }
  }

  render(){
    const { images, active } = this.state;
    return(
      <SliderView images={images} active={active} change={this.change} />
    );
  }
}

export default Slider;

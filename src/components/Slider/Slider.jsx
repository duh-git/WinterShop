import Slide from './Slide/Slide.jsx';
import './Slider.css';



export default function Slider( {sliderData} ) {
  return (
    <section className='slider-section'>
      <button className='left-btn-slider'>
        <img src="./details/arrow-left.svg" alt="" />
      </button>
      <ul className="slider">
        <Slide {...sliderData[0]}/>
        <Slide {...sliderData[1]}/>
        <Slide {...sliderData[2]}/>
      </ul>
      <button className='right-btn-slider'>
        <img src="./details/arrow-right.svg" alt="" />
      </button>
    </section>
  );
}
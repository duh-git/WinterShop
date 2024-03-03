import Card from '../Card/Card';
import './News.css';

export default function News( {catalogData} ) {
  return (
    <section className='news-section'>
      <h1>Новинки</h1>
      <button className='left-btn'><img src="./details/arrow-left.svg" alt="" /></button>
      <div className="card-container">
        <Card {...catalogData[0]}/>
        <Card {...catalogData[1]}/>
        <Card {...catalogData[2]}/>
        <Card {...catalogData[3]}/>
      </div>
      <button className='right-btn'><img src="./details/arrow-right.svg" alt="" /></button>
      <button className='show-more'>Показать больше</button>
    </section>
  );
}
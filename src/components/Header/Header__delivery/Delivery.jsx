import './Delivery.css';

export default function Delivery() {
  return (
    <section className='header__delivery'>
      <div className="region-selector">
        <img src="./geo-point.svg" alt="" />
        <label htmlFor="region">Ваш регион доставки:</label>
        <select name="region" id="region">
          <option value="Moscow">Москва</option>
          <option value="Volgograd">Волгоград</option>
          <option value="St. Petersburg">Санкт-Петербрг</option>
        </select>
      </div>
      <ul className="help">
        <li><a href="#">Магазины</a></li>
        <li><a href="#">Помощь</a></li>
        <li><a href="#">Блоги</a></li>
      </ul>
      <ul className='about-delivery'>
        <li><img src="./truck.svg" alt="" /><a href="">Бесплатная доставка *</a></li>
        <li><img src="./card.svg" alt="" /><a href="">Оплата при получении</a></li>
        <li><img src="./bag.svg" alt="" /><a href="">Возврат в течение 14 дней</a></li>
      </ul>
    </section>
  );
}
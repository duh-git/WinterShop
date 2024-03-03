import './Main.css';

export default function Main() {
  return(
    <section className='header__main'>
        <ul className='audience'>
          <li><a href="#">Мужчинам</a></li>
          <li><a href="#">Женщинам</a></li>
          <li><a href="#">Детям</a></li>
        </ul>
        <img src="./logo.svg" alt="" />
        <ul className="UI">
          <li>
            <a href="#">
              <img src="./user.svg" alt="" />
              <p>Войти</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./favorite.svg" alt="" />
              <p>Избранное</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./cart.svg" alt="" />
              <p>Корзина</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./search.svg" alt="" />
              <p>Поиск</p>
            </a>
          </li>
        </ul>
      </section>
  );
}
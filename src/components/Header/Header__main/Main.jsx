import './Main.css';

export default function Main() {
  return(
    <section className='header__main'>
        <ul className='audience'>
          <li><a href="#">Мужчинам</a></li>
          <li><a href="#">Женщинам</a></li>
          <li><a href="#">Детям</a></li>
        </ul>
        <img src="./header-icon/logo.svg" alt="" />
        <ul className="UI">
          <li>
            <a href="#">
              <img src="./header-icon/user.svg" alt="" />
              <p>Войти</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./header-icon/favorite.svg" alt="" />
              <p>Избранное</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./header-icon/cart.svg" alt="" />
              <p>Корзина</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./header-icon/search.svg" alt="" />
              <p>Поиск</p>
            </a>
          </li>
        </ul>
      </section>
  );
}
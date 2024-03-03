import './Card.css';

export default function Card(
  {
    favorite,
    src,
    title,
    category,
    cost,
  }) {
  return (
    <a className='card' href="#">
      <img className='f_un-f' src={favorite ? "./details/favorite.svg" : "./details/un-favorite.svg"} alt="" />
      <img src={src} alt="" />
      <div className="desciyption">
        <h3>{title}</h3>
        <p>{category}</p>
        <span>{cost}</span>
      </div>
    </a>
  );
}
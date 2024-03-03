import './Slide.css';

export default function Slide( {src, title} ) {
  return (
    <li className="slide">
      <img src={src} alt="" />
      <p>{title}</p>
    </li>
  );
}
import './Slide.css';

export default function Slide( props ) {
  return (
    <li className="slide">
      <img src={props.src} alt="" />
      <p>{props.title}</p>
    </li>
  );
}
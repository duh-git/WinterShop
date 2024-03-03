import './Brends.css';

export default function Breands( {brendData} ) {
  return (
    <section>
      <ul className="brends">
        <li><img src={brendData[0].src} alt="" /></li>
        <li><img src={brendData[1].src} alt="" /></li>
        <li><img src={brendData[2].src} alt="" /></li>
        <li><img src={brendData[3].src} alt="" /></li>
        <li><img src={brendData[4].src} alt="" /></li>
        <li><img src={brendData[5].src} alt="" /></li>
        <li><img src={brendData[6].src} alt="" /></li>
        <li><img src={brendData[7].src} alt="" /></li>
        <li><img src={brendData[8].src} alt="" /></li>
        <li><img src={brendData[9].src} alt="" /></li>
      </ul>
    </section>
  );
}
import './PromotionBanners.css';


export default function promotionBanners( {promoData} ) {

  return (
    <>
      <section className='promo-section'>
        <a href="#">
          <img src={promoData[0].src} alt="" />
          <p>{promoData[0].title}</p>
        </a>
        <a href="#">
          <img src={promoData[1].src} alt="" />
          <p>{promoData[1].title}</p>
        </a>
      </section>
    </>
  );
}
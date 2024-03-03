import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Breands from "./components/Brends/Brends";
import PromotionBanners from "./components/PromotionBanners/PromotionBanners";
import News from "./components/News/News";
import "./App.css";

const sliderData = [
  {
    src: './slider-img/img-1.jpg',
    title: 'WINTER SALE ДО -70%',
  },
  {
    src: './slider-img/img-2.jpg',
    title: 'WINTER SALE ДО -70%',
  },
  {
    src: './slider-img/img-3.jpg',
    title: 'LIB TECH',
  },
];

const brendData = [
  { src: './brends/brend-1.svg' },
  { src: './brends/brend-2.svg' },
  { src: './brends/brend-3.svg' },
  { src: './brends/brend-4.svg' },
  { src: './brends/brend-5.svg' },
  { src: './brends/brend-6.svg' },
  { src: './brends/brend-7.svg' },
  { src: './brends/brend-8.svg' },
  { src: './brends/brend-9.svg' },
  { src: './brends/brend-10.svg' },
];

const promoData = [
  {
    src: './promo/promo-1.png',
    title: 'НАЗВАНИЕ АКЦИИ №1',
  },
  {
    src: './promo/promo-2.png',
    title: 'НАЗВАНИЕ АКЦИИ №2',
  },
];

const catalogData = [
  {
    src: './catalog/board-1.png',
    favorite: true,
    title: 'LIB TECH',
    category: 'Мужской Сноуборд',
    cost: '34392 ₽',
  },
  {
    src: './catalog/board-2.png',
    favorite: false,
    title: 'LIB TECH',
    category: 'Мужской Сноуборд',
    cost: '34392 ₽',
  },
  {
    src: './catalog/board-3.png',
    favorite: false,
    title: 'LIB TECH',
    category: 'Мужской Сноуборд',
    cost: '34392 ₽',
  },
  {
    src: './catalog/board-4.png',
    favorite: false,
    title: 'LIB TECH',
    category: 'Мужской Сноуборд',
    cost: '34392 ₽',
  },
];


export default function App() {
  return (
    <>
      <Header />
      <main>
        <Slider sliderData={sliderData} />
        <Breands brendData={brendData} />
        <PromotionBanners promoData={promoData} />
        <News catalogData={catalogData} />
      </main >
    </>
  );
}

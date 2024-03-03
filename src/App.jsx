import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Breands from "./components/Brends/Brends";
import PromotionBanners from "./components/PromotionBanners/PromotionBanners";
import News from "./components/News/News";
import "./App.css";
import {
  sliderData,
  brendData,
  promoData,
  catalogData,
} from "/data.js";

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

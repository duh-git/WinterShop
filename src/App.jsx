import Header from "./components/Header/Header";
import "./App.css";

export default function App() {
  return (
    <>
    
      <Header />
      <section className="promotions">
        {/* <Scrollbar /> */}
        <ul className="brends">
          
          <li><img src="./brends/brend-1.svg" alt="" /></li>
          <li><img src="./brends/brend-2.svg" alt="" /></li>
          <li><img src="./brends/brend-3.svg" alt="" /></li>
          <li><img src="./brends/brend-4.svg" alt="" /></li>
          <li><img src="./brends/brend-5.svg" alt="" /></li>
          <li><img src="./brends/brend-6.svg" alt="" /></li>
          <li><img src="./brends/brend-7.svg" alt="" /></li>
          <li><img src="./brends/brend-8.svg" alt="" /></li>
          <li><img src="./brends/brend-9.svg" alt="" /></li>
          <li><img src="./brends/brend-10.svg" alt="" /></li>
        </ul>
        {/* <promotionBanners/> */}
      </section>
    </>
  );
}

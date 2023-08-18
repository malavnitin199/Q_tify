import "./App.css";
import CardContainer from "./component/cardContainer/CardContainer";
import Head from "./component/header/Head";
import HeroSection from "./component/heroSection/HeroSection";
import MyCarousel from "./component/myCrousael/MyCarousel";
import { useState, useEffect } from "react";

function App() {
  const [dataTop, setDataTop] = useState([]);
  const [dataNew, setDataNew] = useState([]);
  useEffect(() => {
    fetchData("https://qtify-backend-labs.crio.do/albums/new");
  }, []);

  async function fetchData() {
    let responce = await fetch("https://qtify-backend-labs.crio.do/albums/top");
    responce = await responce.json();
    console.log(responce, "top");
    setDataTop(responce);
    responce = await fetch("https://qtify-backend-labs.crio.do/albums/new");
    responce = await responce.json();
    console.log(responce, "new");
    setDataNew(responce);
  }
  return (
    <>
      <Head />
      <HeroSection />

      <CardContainer text={"Top"} data={dataTop} />
      <CardContainer text={"New"} data={dataNew} />
    </>
  );
}

export default App;

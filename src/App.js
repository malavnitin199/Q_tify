import "./App.css";
import CardContainer from "./component/cardContainer/CardContainer";
import Head from "./component/header/Head";
import HeroSection from "./component/heroSection/HeroSection";
import { useState, useEffect } from "react";
import Accordian from "./component/accordian/Accordian";
import Songs from "./component/songs/Songs";
function App() {
  const [dataTop, setDataTop] = useState([]);
  const [dataNew, setDataNew] = useState([]);
  const [selectedId, setSelecteID] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    let responce = await fetch("https://qtify-backend-labs.crio.do/albums/top");
    responce = await responce.json();

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

      <CardContainer text={"Top"} data={dataTop} setSelecteID={setSelecteID} />
      <CardContainer text={"New"} data={dataNew} setSelecteID={setSelecteID} />

      {dataNew.length > 0 ? (
        <Songs
          dataTop={dataNew}
          selectedId={selectedId}
          setSelecteID={setSelecteID}
        />
      ) : (
        ""
      )}
      <Accordian />
    </>
  );
}

export default App;

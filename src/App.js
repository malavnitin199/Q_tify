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
  const [totalData, SetTotalData] = useState([]);
  const [selectedId, setSelecteID] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    let responce1 = await fetch(
      "https://qtify-backend-labs.crio.do/albums/top"
    );
    responce1 = await responce1.json();

    setDataTop(responce1);
    let responce2 = await fetch(
      "https://qtify-backend-labs.crio.do/albums/new"
    );
    responce2 = await responce2.json();
    console.log(responce2, "new");
    setDataNew(responce2);

    // let totalResponce = [];
    SetTotalData([...responce1, ...responce2]);
  }
  return (
    <>
      <Head dataTop={totalData} />
      <HeroSection />

      <CardContainer text={"Top"} data={dataTop} setSelecteID={setSelecteID} />
      <CardContainer text={"New"} data={dataNew} setSelecteID={setSelecteID} />

      {totalData.length > 0 ? (
        <Songs
          dataTop={totalData}
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

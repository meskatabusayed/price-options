import "./App.css";
import LChart from "./components/LChart/LChart";
import Navbar from "./components/Navbar/Navbar";
import Phones from "./components/Phones/Phones";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
    <Navbar></Navbar>
    <PriceOptions></PriceOptions>
     <LChart></LChart> 
     <Phones></Phones>
    </>
  );
}

export default App;

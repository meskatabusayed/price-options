import "./App.css";
import LChart from "./components/LChart/LChart";
import Navbar from "./components/Navbar/Navbar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
    <Navbar></Navbar>
    <PriceOptions></PriceOptions>
     <LChart></LChart> 
    </>
  );
}

export default App;

import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Header from './component/Header/Header'
import Home from './component/Home/Home'
import SideCart from './component/SideCart/SideCart';

function App() {
  const [spentTime, setSpentTime] = useState("");
  const [spentTime, setSpentTime] = useState("");

  
  const handleWatchTime = (time) => {

    const previousSpentTime = JSON.parse(localStorage.getItem("spentTime"));

    if (previousSpentTime) {
      const totalTime = previousSpentTime + time;
      localStorage.setItem("spentTime", totalTime);
      setSpentTime(totalTime);
    } else {
      localStorage.setItem("spentTime", time);
      setSpentTime(time);
    }
  };

  const handlecountBookmark = () =>{
      
    const previousSpentTime = JSON.parse(localStorage.getItem("spentTime"));

    if (previousSpentTime) {
      const totalTime = previousSpentTime + time;
      localStorage.setItem("spentTime", totalTime);
      setSpentTime(totalTime);
    } else {
      localStorage.setItem("spentTime", time);
      setSpentTime(time);
    }
  }

  return (
    <>
      <div className="header">
        <Header></Header>
      </div>
      <div className="main row mt-4 mx-4">
        <div className="home-container col-md-8">
          <Home
           handleWatchTime={handleWatchTime}
 
           ></Home>
        </div>
        <div className="sideCart-container col-md-4">
          <SideCart
            spentTime={spentTime}
          ></SideCart>
        </div>
      </div>
    </>
  )
}

export default App;

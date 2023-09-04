import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Header from './component/Header/Header'
import Home from './component/Home/Home'

function App() {

  return (
    <>
      <div className="header">
        <Header></Header>
      </div>
      <div className="main row mt-4 mx-4">
        <div>
        {/* <div className="home-container col-md-8"> */}
            <Home></Home>
             
        </div>
       

      </div>
    </>
  )
}

export default App;

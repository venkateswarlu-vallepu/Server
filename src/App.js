import './App.css';
import React, { useRef } from "react";


function App() {
  let display = useRef();
  let displaymonths = useRef();
  let displaydays = useRef();
 
    
   


   let getDataFromServer = async () =>{
    let reqOtions = {
      method:"GET"
    };

    let rawData = await fetch("http://localhost:6969/planets", reqOtions);

    let convertedData = await rawData.json();
    display.current.innerHTML = convertedData;
   }
   let getDataFromServer1 = async () =>{
    let reqOtions = {
      method:"GET"
    };

    let rawData = await fetch("http://localhost:6969/months", reqOtions);

    let convertedData = await rawData.json();
    displaymonths.current.innerHTML = convertedData;
  };
  let getDataFromServer2 = async () =>{
    let reqOtions = {
      method:"GET"
    };

    let rawData = await fetch("http://localhost:6969/weekDays", reqOtions);

    let convertedData = await rawData.json();
    displaydays.current.innerHTML = convertedData;

  };
  return (
    <div className="App">
      <h1 className='head'>Getting Data from Server</h1>
      <div>
     <button className='planetsbutton'  onClick={()=>{
         getDataFromServer();
     }}>Req-PlanetsData</button>
      <h1 className='planets' ref={display}></h1>
     </div>
     <div>
      <button className='planetsbutton' onClick={()=>{
         getDataFromServer1();
     }}>Req-MonthsData</button>
     <h1 className='months' ref={displaymonths}></h1>
     </div>
     <div>
      <button className='planetsbutton' onClick={()=>{
         getDataFromServer2();
     }}>Req-WeekDaysData</button>
     <h1 className='weekdays' ref={displaydays}></h1>
     </div>
    </div>
  );
}

export default App;

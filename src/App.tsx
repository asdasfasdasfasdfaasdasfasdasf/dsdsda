import React from "react";
import logo from "./logo.svg";
import "./App.css";


// import Form from "./Form";
function App() {
  
  // let youtube: string =
  //   "https://www.youtube.com/embed/view_video.php?viewkey=ph5fff89fe86ddf?mute=1";


  // function sayHighToMike() {

  //   alert("Hi Mike!");
  //   console.log("Hi Mike!")

  // }
  return (
    <div className="App">

      {/* <Form />

      <Form />
      <Form /> */}
      
      {/* <embed src="" loop="true" autostart="true" width="2" height="0" /> */}
 
     <img src={logo} className="App-logo" alt="logo" />
      {/* <iframe className="App-iframe" src={youtube}> </iframe >
      <iframe className="App-iframe" src={youtube}> </iframe >
      <iframe className="App-iframe" src={youtube}> </iframe >
      <iframe className="App-iframe" src={youtube}> </iframe >
      <iframe className="App-iframe" src={youtube}> </iframe >
      <iframe className="App-iframe" src={youtube}> </iframe>
      <iframe className="App-iframe" src={youtube}> </iframe >
      <iframe className="App-iframe" src={youtube}> </iframe><iframe className="App-iframe" src={youtube}> </iframe >
      <iframe className="App-iframe" src={youtube}> </iframe> */}

      {/* <header className="App-header">

        <div id='Double-logo'><img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button className='App-button' onClick= {sayHighToMike} >Button 2</button>
        <button className='App-button' onClick= {sayHighToMike} >Button 2</button>
        <button className='App-button' onClick= {sayHighToMike} >Button 2</button>
        <button className='App-button' onClick= {sayHighToMike} >Button 2</button>

      </header> */}
    </div>
  );
}

export default App;

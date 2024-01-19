
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  
   var [counter,setcounter] = useState(10)
  const addupdate = () =>{
    counter = counter +1;
    setcounter (counter);
    console.log(counter);
  }
  const reduceupdate = () =>{
    setcounter (counter -1);
    console.log(counter);
  }
 
  return (
    <div className="App">
      <h1 >Number to changed : {counter} </h1>
      <button type="button" className="btn btn-primary" onClick={addupdate}>Add</button>
      <button type="button" className="btn btn-danger" onClick={reduceupdate}>Reduce</button>
    </div>

  );
}

export default App;

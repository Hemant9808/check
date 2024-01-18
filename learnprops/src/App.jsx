
import './App.css';
import Card from "./Card.jsx"
function App() {
  const name = ["hemant","rohit","akash","chutia"];
  name.map((item) => (
    console.log(item)
  ));
  return (
    <div className="app">
      
      {name.map((item) => (
      
      <Card username ={item}></Card>
       ))};
    </div>
  );
}

export default App;

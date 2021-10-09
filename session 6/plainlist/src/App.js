import './App.css';
import List from './components/List';
import GroceryList from './components/GroceryList';
function App() {
  return (
    <div className="App">
    <h1>Render List Contents</h1>  
    <List/>
    <h1>Grocery List</h1>
    <GroceryList/>
    </div>
  );
}

export default App;

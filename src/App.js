import './App.css';
import Counter from './components/Counter';
import Users  from './components/Users';
import Posts  from './components/Posts';
import Comments from './components/Сomments';


function App() {
  return (
    <div className="App">
      <Counter />
      <Users /> 
      <Posts/>
      <Comments/>
    </div>
  );
}

export default App;

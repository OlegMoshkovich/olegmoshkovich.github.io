import logo from './logo.svg';
import './App.css';
import AppBar from'./AppBar/AppBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppBar/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;

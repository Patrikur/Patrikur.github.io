import logo from './logo.png';
import './stylesheet.css';
import Menu from './components/layout/header/Menu';
import Settings from './components/layout/header/Settings';

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <a href="#home" ><img src={logo} className="logo" alt="logo" /></a>
        </div>
        <Menu />
        <Settings />
      </header>
    </div>
  );
}

export default App;

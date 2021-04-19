
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../components/pages/Home/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;

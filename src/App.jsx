import './App.css';
import { AnnimatedRoutes } from './components/UI';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <AnnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;

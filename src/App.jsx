import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './assets/styles/main.scss';
import { Home } from './pages/Home';

export function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  )
}


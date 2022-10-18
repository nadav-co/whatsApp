import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './assets/styles/main.scss';
import { InstallAlert } from './cmps/InstallAlert';
import { Home } from './pages/Home';

export function App() {

  return (
    <div className="App">
      <InstallAlert/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  )
}


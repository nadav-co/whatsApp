import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './assets/styles/main.scss';
import { Home } from './pages/Home';

export function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  )
}


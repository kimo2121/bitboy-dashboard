import './app.scss';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import HomePage from './pages/homePage/HomePage';
import WhitePaper from './pages/whitePaper/WhitePaper';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/whitePaper" component={WhitePaper} />
      </Switch>
    </Router>
  );
}

export default App;

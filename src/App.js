import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './pageHome/Home'
import Products from './pageProducts/Products'
import About from './pageAbout/About'

export default function App() {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

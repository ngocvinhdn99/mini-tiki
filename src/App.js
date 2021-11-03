import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import CartFeaTure from './components/Cart';
import Header from './components/Header';
import ProductFeature from './components/Product';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
          <Redirect from="/" to="/products" exact />

          <Route path="/products" component={ProductFeature} />
          <Route path="/cart" component={CartFeaTure} />
      </Switch>
    </div>
  );
}

export default App;

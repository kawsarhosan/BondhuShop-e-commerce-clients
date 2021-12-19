
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Shared/Footer';
import Header from './Components/Shared/Header';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          {/* <Footer/> */}
        </BrowserRouter>
    </div>
  );
}

export default App;

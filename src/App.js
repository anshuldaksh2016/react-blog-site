import Navbar from './components/Navbar';
import CreateBlog from './components/CreateBlog';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (


    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <CreateBlog />
            </Route>

          </Switch>

        </div>
      </div>
    </Router>





  );
}

export default App;

//npx json-server --watch Data/db,json --port 8000
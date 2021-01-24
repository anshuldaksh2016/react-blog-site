import Navbar from './components/Navbar'

import Home from './components/Home'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />

    </div>
  );
}

export default App;

//npx json-server --watch Data/db,json --port 8000
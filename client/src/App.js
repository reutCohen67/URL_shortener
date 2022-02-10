import './App.css';
import {
  BrowserRouter,
  Routes, 
  Route,
} from "react-router-dom";

import Home from './Home'
import GoLink from './GoLink'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/l/:code" element={<GoLink />} >
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

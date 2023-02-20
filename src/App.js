
import './App.css';
import { GlobalStyle } from './globalStyles';
import {
 BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import {Home} from './pages/Home';
import {Login} from './pages/Login'
import { Feed } from './pages/Feed';
import {Sign} from './pages/Sign'
function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Routes>
        <Route path={"/"} element={<Home/>}></Route>
        <Route path={"/login"} element={<Login/>}></Route>
        <Route path={"/feed"} element={<Feed/>}></Route>
        <Route path={"/sign"} element={<Sign/>}></Route>
      </Routes>
    </Router>
  
  );
}

export default App;

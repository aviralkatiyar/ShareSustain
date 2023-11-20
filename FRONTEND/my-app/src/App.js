import './App.css';

import Home from './screens/Home';

import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import Login from './screens/Login';
import Signup from './screens/Signup';
import { CardProvider } from './components/ContextReducer';
import Cart from './screens/Cart';
import Myorder from './screens/Myorder';
import Posts from './screens/Post';

function App() {
  return (
  <CardProvider>
    <div>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/createuser" element={<Signup/>} />
      <Route exact path="/Myrequests" element={<Myorder/>} />
      <Route exact path="/MYposts" element={<Posts/>}/>
     
    </Routes>
  </div>
  </CardProvider>
  
  );
}

export default App;

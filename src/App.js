
import './App.css';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import './resety.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
      <BrowserRouter >
        <Routes>
          <Route path="/"  element={<Home></Home>}/>
          <Route path="/shop"  element={<Shop></Shop>}/>
        </Routes>
      </BrowserRouter>

  );
}

export default App;




import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Regjistro from './Regjistro';
import Login from "./Login";

import './App.css'
import Kryefaqja from "./Kryefaqja";
export default function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
        
        <Route path="/kryefaqja" element={<Kryefaqja />}/>
        <Route path="/regjistro" element={<Regjistro />}>

      </Route>
    </Routes>
  </BrowserRouter>
  );
}

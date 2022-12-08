import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './home';
import { Upi } from './upi';
import { Card } from './card';
import { Cash } from './cash';

function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/u' element={<Upi/>}/>
          <Route path='/c' element={<Card/>}/>
          <Route path='/d' element={<Cash/>}/>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
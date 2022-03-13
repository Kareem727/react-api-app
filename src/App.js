import React from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Hellow from './components/hellow';
import { BrowserRouter as Router, Routes, Route , Link } from 'react-router-dom';

 function App() {
  return (
    <div>
     
      <Router>
      <Header/>
       <Hellow name={"Kemmmmmmoooooooooooooooooooooooooo"}/>
      <Counter/>
<ul>
        <li>
          <Link to="/" className='text-blue-500'>Home</Link>
        </li>
        <li>
          <Link to="/a" className='text-blue-500'>About</Link>
        </li>
      </ul>
   
   <Routes>
   <Route  exact path='/' >Thisishomebage</Route>
  <Route path='/a' element={<Hellow/>}/>
   </Routes>
  </Router>
  
      </div>
   );
}

export default App; 

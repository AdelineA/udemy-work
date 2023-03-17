
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Body from './Components/Body';
import Lessons from './Components/Lessons';
import Recommended from './Components/Recommended';
import Homepage from './Pages/Homepage';
import Hover from './Components/Hover';
import Footer1 from './Components/Footer1';



function App() {
  return (
<Routes>
  <Route path='/' element ={<Homepage/>}/>
  <Route path='navigation' element={<Navigation/>}/>
  <Route path='body' element={<Body/>}/>
  <Route path='lesson' element={<Lessons/>}/>
  <Route path='recommend' element={<Recommended/>}/>
  <Route path='hover' element={<Hover/>}/>
  <Route path='footer' element={<Footer1/>}/>
</Routes>
  );
}

export default App;

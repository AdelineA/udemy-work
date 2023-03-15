
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Body from './Components/Body';
import Lessons from './Components/Lessons';
import Recommended from './Components/Recommended';
import Homepage from './Pages/Homepage';
import Swipe from './Components/Swipe';



function App() {
  return (
<Routes>
  <Route path='/' element ={<Homepage/>}/>
  <Route path='navigation' element={<Navigation/>}/>
  <Route path='body' element={<Body/>}/>
  <Route path='lesson' element={<Lessons/>}/>
  <Route path='recommend' element={<Recommended/>}/>
  <Route path='swipe' element={<Swipe/>}/>
</Routes>
  );
}

export default App;

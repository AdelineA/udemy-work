
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Body from './Components/Body';
import Homepage from './Pages/Homepage';


function App() {
  return (
<Routes>
  <Route path='/' element ={<Homepage/>}/>
  <Route path='navigation' element={<Navigation/>}/>
  <Route path='body' element={<Body/>}/>
</Routes>
  );
}

export default App;

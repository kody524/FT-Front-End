import { Route, Routes } from 'react-router-dom';
import Navibar from './components/Navibar';
import Home from './components/Home.jsx';
import Signup from './components/Signup.jsx';
import Routines from './components/Routines.jsx';
import Activities from './components/Activities.jsx'

function App() {
  return (
    <div className='App'>
      <Navibar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='routines' element={<Routines />} />
        <Route path='activities' element={<Activities />} />
        <Route path='signup' element={<Signup />} />
        
      </Routes>
    </div>
  );
}

export default App;

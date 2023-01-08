import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AltThemeScreen } from './screens/AltThemeScreen';
import { LandingScreen } from './screens/LandingScreen';


function App() {

  return (
    <BrowserRouter>
    <div className='body'>
      <Routes>
        <Route path="/alternate" element={<AltThemeScreen />} />
        <Route path="/" element={<LandingScreen />} />
      </Routes>
  </div>
  </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AltThemeScreen } from './screens/AltThemeScreen';
import { LandingScreen } from './screens/LandingScreen';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/alternate" element={<AltThemeScreen />} />
        <Route path="/" element={<LandingScreen />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;

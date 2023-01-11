import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { LightThemeScreen } from './screens/LightThemeScreen';
import { DarkThemeScreen } from './screens/DarkThemeScreen';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/alternate" element={<DarkThemeScreen />} />
        <Route path="/" element={<LightThemeScreen />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;

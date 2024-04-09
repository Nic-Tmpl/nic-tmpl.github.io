import { Route, Routes } from 'react-router-dom';
import './App.css';
import "animate.css/animate.compat.css"
import { LightThemeScreen } from './screens/LightThemeScreen';
import { DarkThemeScreen } from './screens/DarkThemeScreen';


function App() {

  return (
      <Routes>
        <Route path="/alternate" element={<DarkThemeScreen />} />
        <Route path="/" element={<LightThemeScreen />} />
      </Routes>
  );
}

export default App;

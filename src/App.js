import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { LightThemeScreen } from './screens/LightThemeScreen';
import { DarkThemeScreen } from './screens/DarkThemeScreen';


function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/alternate" element={<DarkThemeScreen />} />
        <Route path="/" element={<LightThemeScreen />} />
      </Routes>
  </HashRouter>
  );
}

export default App;

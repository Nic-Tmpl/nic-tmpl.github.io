import './App.css';
import { AltThemeScreen } from './screens/AltThemeScreen';
import { LandingScreen } from './screens/LandingScreen';


function App() {

  return (
    <div className='body'>
      <Routes>
        <Route path="/alternate" element={<AltThemeScreen />} />
        <Route path="/" element={<LandingScreen />} />
      </Routes>
  </div>
  );
}

export default App;

import './App.css';
import { Logo } from './components/Logo';
import { Separator } from './components/Separator';

function App() {
  return (
    <div className="App">
      <Separator/>
      <Logo />
      <Separator/>  
    </div>
  );
}

export default App;

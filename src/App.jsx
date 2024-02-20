import './App.css';
import { HeaderLink } from './components/HeaderLink';
import { Logo } from './components/Logo';
import { Separator } from './components/Separator';

function App() {
  return (
    <div className="App">
      <Separator/>
      <Logo />
      <Separator/> 
      <HeaderLink name="Work"/> 
      <HeaderLink name="Team"/>
      <HeaderLink name="Contact Us"/>
      <Separator />
    </div>
  );
}

export default App;

import './App.css';
import { ContainerHeaderLinks } from './components/ContainerHeaderLinks';
// import { HeaderLink } from './components/HeaderLink';
import { Logo } from './components/Logo';
import { Separator } from './components/Separator';

function App() {
  return (
    <div className="App">
      <Separator/>
      <Logo />
      <Separator/> 
      <ContainerHeaderLinks />
      <Separator />
    </div>
  );
}

export default App;

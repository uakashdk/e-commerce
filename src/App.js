import About from './Component/About';
import Contact from './Component/Contact';
import Experience from './Component/Experince';
import Home from './Component/Home';
import Nav from './Component/Nav';
import Portfolio from './Component/Portfolio';
import Sociallink from './Component/Sociallink';
 
function App() {
  return (
  <div>
   <Nav/>
   <Home/>
   <About/>
   <Portfolio/>
   <Experience/>
   <Contact/>
   <Sociallink/>
  </div>
  );
}

export default App;

import './App.css';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import Project from './components/Project'; 
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <About />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
 
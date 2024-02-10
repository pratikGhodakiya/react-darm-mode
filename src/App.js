import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
function App() {
  return (
    <>
      {/* <Navbar title="23" logo="SkillSquare" about="AboutTextulity" /> */}
      <Navbar title="Navbar" />
      <div className="container my-3">
        {/* <Form heading="Enter the Text" /> */}
        <About />
      </div>
    </>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      {/* <Navbar title="TextUtils Title" hometext="Home Menu" abouttext="About Menu"/> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils Title" hometext="Home Menu"/>
      <div className="container my-3">
        <TextForm heading="Enter the Text to analyze below"/>
      </div>
      
    </>
  );
}

export default App;

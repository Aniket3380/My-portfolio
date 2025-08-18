
  import './App.css';
  import Nav from './Component/Navbar';
  import Home from './Component/Home';
  import MyWork from './Component/Mywork';
  import Myskill from './Component/Myskill';
  import {BrowserRouter,Routes,Route} from "react-router-dom"
  import Certificates from './Component/Certificates';
  import Contact from './Component/Contact';

 

  function App() {
    return (
        <BrowserRouter>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/mywork' element={<MyWork/>}/>
          <Route path='/myskill' element={<Myskill/>}/>
          <Route path='/certificate' element={<Certificates/>}/>
          <Route path='/contact' element={<Contact/>}/>
         
        </Routes>
        
      </div>
      </BrowserRouter>
    );
  }

  export default App;

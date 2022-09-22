import logo from './logo.svg';
import './App.css';
import MainPg from './MainPg';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Form from './Form';
import MainDataPg from './MainDataPg';
import ViewEmp from './ViewEmp';

function App() {
  return (
    <div className="App">
          <a href="/" className='Anchortag_heading'>
                <h2 className='Heading_div'>
                    To-Do-List
                </h2>
          </a>
            
        <BrowserRouter >
              <Routes>
                      <Route path="/form/:id" element={<Form />} />
                      <Route path="/form" element={<Form />} />
                      <Route path="/view-employees" element={<ViewEmp />} />
                      <Route path="/" element={<MainDataPg />} />
              </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;

// Component--> Form--> Main page
//Main pg--> Form---> Main pg--> New compo or there only
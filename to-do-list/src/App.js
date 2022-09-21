import logo from './logo.svg';
import './App.css';
import MainPg from './MainPg';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Form from './Form';

function App() {
  return (
    <div className="App">
          <a href="/">
                <h2 className='Heading_div'>
                    To-Do-List
                </h2>
          </a>
            
        <BrowserRouter >
              <Routes>
                      <Route path="/form" element={<Form />} />
                      <Route path="/" element={<MainPg />} />
              </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;

// Component--> Form--> Main page
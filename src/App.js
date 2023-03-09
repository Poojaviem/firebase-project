import './App.css';
import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom';
import Register from './Register';
import { ToastContainer } from 'react-toastify';
import Homepage from './Homepage';

function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <Router>
      <Routes>
        <Route path='/' element={<Register/>}></Route>
        <Route path='/homepage' element={<Homepage/>}></Route>

      </Routes>
      
      </Router>
      
    </div>
  );
}

export default App;

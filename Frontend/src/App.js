// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { Bmi } from './pages/Bmi';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/bmi' element={<Bmi />} />
      </Routes>
    </div>
  );
}

export default App;

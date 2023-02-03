import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Firstpage from './frontpage';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Firstpage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

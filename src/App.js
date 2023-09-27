import './App.css';
import Browse from './pages/browse/Browse';
import Search from './pages/search/Search';
import Nav from './components/nav/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <Nav />
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Browse />}  />
              <Route path='/search' element={<Search />} />
            </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;

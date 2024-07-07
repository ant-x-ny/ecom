
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/navbar';
import HomePage from './components/homepage';
import Error from './components/error';
function App() {
  return (
    <>
    <NavBar /> 
    <BrowserRouter>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='/error' element={<Error />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

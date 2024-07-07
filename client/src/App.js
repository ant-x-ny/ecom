
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/navbar';
import HomePage from './components/homepage';
import Error from './components/error';
import Footer from './components/Footer';
import AddProduct from './components/AddProduct';
function App() {
  return (
    <>
    <NavBar /> 
    <BrowserRouter>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='/addproduct' element={<AddProduct />} />
    </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;

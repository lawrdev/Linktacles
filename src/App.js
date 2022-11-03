import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import { Contact } from './pages/Contact'
import Footer from "./components/Footer";

function App() {
  return (<>
    <div className='px-4'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>

    <Footer />
  </>);
}

export default App;

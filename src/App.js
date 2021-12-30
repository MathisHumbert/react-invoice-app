import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import InvoicePage from './Pages/InvoicePage';
import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/invoice/:id" element={<InvoicePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

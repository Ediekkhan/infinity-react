import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Shop from "./pages/Shop"
import Footer from './components/Footer';
import Classes from "./pages/Classes";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Location from "./components/Location";
import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    <div >
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/Servicespage" element={<ServicesPage />} />
          <Route path="/Blog" element={<Blog />} />
          
        </Routes>
      </BrowserRouter>
     
     <Location />
      <Footer />
    </div>
  );
}

export default App;

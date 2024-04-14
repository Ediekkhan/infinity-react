import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Shop from "./pages/Shop"
import Footer from './components/Footer';
import Workout from "./pages/Workout";
import Blog from "./pages/Blog";
import Home from "./pages/Home";

function App() {
  return (
    <div >
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classes" element={<Workout />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/Blog" element={<Blog />} />
          
        </Routes>
      </BrowserRouter>
     
      <Footer />
    </div>
  );
}

export default App;

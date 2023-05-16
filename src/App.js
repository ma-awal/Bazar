import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout/Layout';
import Home from './pages/Home/Home';
import Tab from './pages/Tab/Tab';
import Faqs from './pages/Faqs/Faqs';
import Offer from './pages/Offer/Offer';
import Blogs from './pages/Blogs/Blogs';
import TrackOrder from './components/TrackOrder/TrackOrder';
import Profile from './pages/Profile/Profile';
import Store from './pages/Store/Store';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Contact from './components/Contact/Contact';
import About from './pages/About/About';
import Product from './components/Product/Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Profile/:tabs" element={<Profile />} />
          <Route path="/tabs" element={<Tab />} />
          <Route path="/Faqs" element={<Faqs />} />
          <Route path="/About" element={<About />} />
          <Route path="/Offer" element={<Offer />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/TrackOrder" element={<TrackOrder />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/PlaceOrder" element={<PlaceOrder />} />
          <Route path="/Product/:category" element={<Product />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

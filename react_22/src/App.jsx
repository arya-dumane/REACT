import { memo } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Footer from './components/footer';

import Home from './pages/home';
import About from './pages/about';
import Product from './pages/product';
import Contact from './pages/contact';
import Notfound from './pages/notfound';

import Men from './pages/men';
import Women from './pages/women';
import Kids from './pages/kids';
import Courses from './pages/courses';
import Coursedetail from './pages/coursedetail';
import Navbar2 from './components/navbar2';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      <Navbar />
      <Navbar2 />

      <main className="flex-1">
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/product" element={<Product />}>
            <Route index element={<Men />} />
            <Route path="men" element={<Men />} />
            <Route path="women" element={<Women />} />
            <Route path="kids" element={<Kids />} />
          </Route>

          <Route  path='/courses' element={<Courses />} />
          <Route path='/courses/:courseid' element={<Coursedetail />} />  
          //Dynamic routing is a way to create one route that can handle many different URLs by using a variable part in the URL.
          //In React Router, parameters are defined using : and retrieved using useParams().
          //Here :courseid is the dynamic route parameter.

          <Route path="*" element={<Notfound />} />

        </Routes>
      </main>

      <Footer />

    </div>
  );
};

export default memo(App);
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CreateOrder from './Components/createOrder/createOrder';
import Orders from './Components/createOrder/orders';
import Update from './Components/createOrder/update';
import Home from './Components/Home/home';
import Contact from './Components/contact/contact';
import Navbar from './Components/Navbar/navbar';
import Footer from './Components/footer/footer';
import Login from './Components/login/login';
import PopUp from './Components/popup/popup';
import SignUp from './Components/singup/signup';
// import Modal from './Components/popup/popup';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {/* <CreateOrder />
        <Contact />  */}
        {/* <Modal /> */}
        {/* <PopUp /> */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/updateorder/:id" element={<Update />} />
          <Route path="/orders" element={<Orders countOrder={2}/>} />
          <Route path="/createorder" element={<CreateOrder/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signin' element={<SignUp />} />


         
        </Routes>
         {/* <Route path="about" element={<About />} />
          <Route path="job" element={<Jobs />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="*" element={<NotFound />} /> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

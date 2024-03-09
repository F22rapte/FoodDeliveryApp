import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { BrowserRouter ,Route,Routes } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import CreateAccount from './screens/CreateAccount';
import { CartProvider } from './components/ContextReducer';




function App() {
  return (
    <CartProvider>
      <BrowserRouter>
    <div>
     <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/login' element={<Login/>} />
       <Route path='/signup' element={<CreateAccount/>} />
       

       
     
     </Routes>
    </div>
    </BrowserRouter>
    </CartProvider>
   
  );
}

export default App;

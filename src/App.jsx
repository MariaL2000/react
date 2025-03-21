import Navbar from './Components/Navbar/Navbar'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import bann from './Components/Assets/bann.jpg'
import bann2 from './Components/Assets/bann2.jpg'

import './index.css'

function App () {
  


  return (
   <div>
    <BrowserRouter>
  
    <Navbar/>
    <Routes>

      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory banner={bann} category="men" />}/>
      <Route path='/womens' element={<ShopCategory banner={bann2} category="women" />}/>


      <Route path="product" element={<Products/>}>
      <Route path=':productId' element={<Products/>}/>
      </Route>

      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
    </Routes>



    </BrowserRouter>
   </div>
  )
}

export default App

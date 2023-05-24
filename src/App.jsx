import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Navbar from './components/Navbar'
import Shop from "./pages/shop/Shop"
import Cart from "./pages/cart/Cart"
import Home from './pages/home/Home'
import { ShopContextProvier } from './context/shop-context'

const App = () => {
  return (
    <ShopContextProvier>
      <Router>
        <Navbar />
          <Routes>

            <Route path='/' element={ <Home /> } />
            <Route path='/shop' element={<Shop />}/>
            <Route path='/cart' element={<Cart />} />
            
          </Routes>
      </Router>
    </ShopContextProvier>
  )
}

export default App

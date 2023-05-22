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

const App = () => {
  return (
      <Router>
        <Navbar />
          <Routes>

            <Route path='/' element={ <Home /> } />
            <Route path='/shop' element={<Shop />}/>
            <Route path='/cart' element={<Cart />} />
            
          </Routes>
      </Router>
  )
}

export default App

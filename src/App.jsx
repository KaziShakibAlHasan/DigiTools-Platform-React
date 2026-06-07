
import { useState } from 'react'
import './App.css'
import Banner from './assets/Components/Banner/Banner'
import MIddleBanner from './assets/Components/Banner/MIddleBanner'
import NavBar from './assets/Components/NavBar/NavBar'
import Cart from './assets/Components/Products/Cart'

import Products from './assets/Components/Products/Products'
import Sections from './assets/Components/Section/Sections'
const getProducts = async () => {
  const res = await fetch('/public/Products.json')
  return res.json();
}

const ProductsPromise = getProducts();

function App() {
  const [ activeTab, setActiveTab] = useState('product')
  const [carts, setCart] =useState([])
  
  return (
    <>

      <NavBar></NavBar>
      <Banner></Banner>
      <MIddleBanner></MIddleBanner>
      <Sections></Sections>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center mt-8">
        <input type="radio" name="my_tabs_1" onClick={() => setActiveTab('product')} className="tab rounded-2xl w-50" aria-label="Products" defaultChecked/>
        <input type="radio" name="my_tabs_1" onClick={() => setActiveTab('cart')}  className="tab rounded-2xl w-50" aria-label="Cart" />
        
      </div>
      {activeTab === "product" && <Products ProductsPromise={ProductsPromise} carts={carts} setCart={setCart} />}
      {activeTab === "cart" && <Cart carts={carts} setCart={setCart} ></Cart>}


    </>
  )
}

export default App

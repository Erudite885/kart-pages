import React, {useState} from "react";
import {Cart, Items, Header} from './components'

import pItems from './constants/index'
console.log(pItems)

const App = () => {
  const [cartItems, setCartItems] = useState([])
  const onAddHandler = (product) => {
    const available = cartItems.find((x) => (x.id === product.id))
    if (!available){
      setCartItems([...cartItems, {...product, qty: 1}])
    } else {
      setCartItems(cartItems.map((x) => (x.id === product.id) ? {...available, qty: available.qty + 1} : x));
    }
  }

  const onRemoveHandler = (product) => {
    const available = cartItems.find((x) => x.id === product.id)
    if (available.qty === 1){
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...available, qty: available.qty - 1 } : x
        )
      );
    }
  }
    
    return (
      <div className="bg-primary text-white w-full overflow-hidden">
        <Header cartCount={cartItems.length} />
        <main className='flex flex-col sm:flex-row justify-between gap-2'>
            <Items pItems={pItems} onAddHandler={onAddHandler} />
            <Cart cartItems={cartItems} onAddHandler={onAddHandler} onRemoveHandler={onRemoveHandler} />
        </main>
      </div>
    );};

export default App;

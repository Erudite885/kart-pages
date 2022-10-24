import React from "react";

const Cart = ({cartItems, onAddHandler, onRemoveHandler}) => {
  console.log(cartItems)
  const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0)
  const taxPrice = itemsPrice * 0.15
  const shipping = itemsPrice < 5000 ? 0 : itemsPrice * 0.05
  const totalPrice = itemsPrice + taxPrice + shipping
  
  return (
    <aside className="bg-indigo-500 rounded flex-col border-2 border-indigo-900 text-white w-full overflow-hidden">
      <h2 className="capitalize text-center text-primary p-5">cart items</h2>
      <div>
        {cartItems.length === 0 && (
          <p className="text-center p-7">Your Cart is empty...</p>
        )}
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between mx-5">
            <p className="capitalize text-[17px]">{item.name}</p>
            <div className="w-[55px] mb-2 justify-between flex items-center">
              <button
                onClick={() => onAddHandler(item)}
                className="border border-primary w-[24px] cursor-pointer bg-green-500 rounded"
              >
                +
              </button>
              <button
                onClick={() => onRemoveHandler(item)}
                className="border border-primary cursor-pointer w-[24px] bg-red-500 rounded"
              >
                -
              </button>
            </div>
            <div>
              {item.qty} * ${item.price.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
      {cartItems.length !== 0 && (
        <>
          <div className="flex flex-col mx-3 p-2">
            <div className="flex flex-row justify-between items-center border-t border-primary mb-2">
              <p>Items Price</p>
              <p>${itemsPrice.toFixed(2)}</p>
            </div>{" "}
            <div className="flex flex-row justify-between items-center mb-2">
              <p>Tax Price</p>
              <p>${taxPrice.toFixed(2)}</p>
            </div>{" "}
            <div className="flex flex-row justify-between items-center mb-2">
              <p>Shipping Fee</p>
              <p>${shipping.toFixed(2)}</p>
            </div>{" "}
            <div className="flex flex-row border-b border-t border-primary justify-between items-center ">
              <p>Total Price</p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
            <div className="border border-primary hover:border-green-500 w-2/5 flex justify-center items-center mx-auto my-5 p-1 hover:bg-green-500 bg-primary rounded">
              <button className="uppercase leading-[20px] tracking-wide cursor-pointer">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </aside>
  );
};

export default Cart;

import React from "react";

const Header = ({cartCount}) => {
  return (
    <section className="bg-primary sm:flex-row flex-col flex items-center justify-between text-white w-full">
      <header className="uppercase text-3xl p-6 my-2">
        {" "}
        product list
      </header>
      <div className='flex px-8 py-2 sm:py-8 justify-between w-60 sm:w-45 items-center sm:mr-8'>
        <a href="#/cart" className="sm:mr-3 ml-2 sm:ml-0 flex">
          
          Cart{' '}
          {cartCount ? (
            <button className="border bg-red-600 rounded-[10px] w-4 h-4 text-xs flex justify-center items-center border-red-500 -ml-0.6">{cartCount}</button>
          ) : ('')}
          
          
        </a>
        <a href="#/signin">Sign In</a>
      </div>
    </section>
  );
};

export default Header;


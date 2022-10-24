import React from "react";

const ProductItem = ({ item, onAddHandler }) => {
  return (
    <section className="bg-primary rounded flex-col border-2 border-primary mb-2 sm:mb-0 mr-0 sm:mr-1 w-full">
      <h2 className="capitalize text-white text-center">{item.name}</h2>
      <p className="capitalize text-white text-center">${item.price}</p>
      <div className="flex justify-center  ">
        <button
          onClick={() => onAddHandler(item)}
          className="capitalize cursor-pointer p-1 bg-primary text-white text-center border rounded border-purple-500 my-2"
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
};

export default ProductItem;

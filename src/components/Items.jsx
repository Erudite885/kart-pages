import React from "react";
import { ProductItem } from "./index";

const Items = ({ pItems, onAddHandler }) => {
  return (
    <section className="bg-indigo-500 flex-col rounded border-2 border-indigo-900 text-primary w-full ">
      <header className="font-semibold uppercase text-center text-xl p-5">
        Items
      </header>
      <main className="flex items-center flex-col sm:flex-row">
        {pItems.map((item) => (
          <ProductItem key={item.id} item={item} onAddHandler={onAddHandler} />
        ))}
      </main>
    </section>
  );
};

export default Items;

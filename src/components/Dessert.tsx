import React, { useEffect, useState } from "react";
import useDesertSore from "../store/desertStore.ts";
import { motion } from "framer-motion";
const Dessert = ({ image, name, category, price, id }) => {
  const { getItemQuantity, addItem, removeItem } = useDesertSore((state) => ({
    getItemQuantity: state.getItemQuantity,
    addItem: state.addItem,
    removeItem: state.removeItem,
  }));
  const item = getItemQuantity(id);
  const [imageLoad, setImageLoad] = useState(true);
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      className="relative"
    >
      <div
        className={`overflow-hidden rounded-lg drop-shadow-lg border-4 transition-border duration-700  ${
          item.length > 0 ? "border-red" : "border-transparent"
        }`}
      >
         <div
            className={`dessert_image w-[230px] h-[230px] ${
              imageLoad ? "block" : "hidden"
            }`}
          ></div>
        <picture>
          <source media="(min-width:900px)" srcSet={image.desktop} />
          <source media="(min-width:800px)" srcSet={image.tablet} />
          <img
            src={image.mobile}
            alt={name}
            className={`w-[230px] h-[230px] object-cover
             hover:scale-110 transition-all duration-1000 ${
               imageLoad ? "hidden" : "block"
             }`}
            onLoad={() => setImageLoad(false)}
          />
         
        </picture>
      </div>
      <div
        className={` ${
          item.length != 0
            ? "bg-red"
            : "bg-white hover:bg-red hover:text-white addToCart transition-all duration-300"
        }  absolute bottom-[24%] left-[13.5%] rounded-full border-red border-[1px] w-[170px] drop-shadow-2xl'`}
      >
        {item.length == 0 ? (
          <button
            className="px-6 py-2 flex items-center gap-2 "
            onClick={() =>
              addItem({
                name: name,
                category: category,
                price: price,
                image: image,
                id: id,
              })
            }
          >
            <img src="/images/icon-add-to-cart.svg" alt="" />
            Add to Cart
          </button>
        ) : (
          <div className="flex justify-between w-full px-4 py-2">
            <button
              onClick={() =>
                removeItem({
                  name: name,
                  category: category,
                  price: price,
                  image: image,
                  id: id,
                })
              }
            >
              <img
                src="/images/icon-decrement-quantity.svg"
                alt="decrease quantity by 1"
                className="rounded-full w-5 h-5 border-white border-[1px] p-1 block"
              />
            </button>
            <span className="text-white">{item[0].quantity}</span>
            <button
              onClick={() =>
                addItem({
                  name: name,
                  category: category,
                  price: price,
                  image: image,
                  id: id,
                })
              }
            >
              <img
                src="/images/icon-increment-quantity.svg"
                alt="increase quantity by 1"
                className="rounded-full w-5 h-5 border-white border-[1px] p-1 block"
              />
            </button>
          </div>
        )}
      </div>
      <span className="text-rose_400 mt-7 block text-md">{category}</span>
      <h2 className="text-rose_900 font-semibold ">{name}</h2>
      <span className="text-red font-bold">${price.toFixed(2)}</span>
    </motion.div>
  );
};

export default Dessert;

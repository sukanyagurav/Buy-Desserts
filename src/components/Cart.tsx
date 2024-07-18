import React, { useState } from "react";
import useDesertSore from "../store/desertStore.ts";
import Modal from "./Modal";
import { motion, AnimatePresence } from "framer-motion";

const Cart = () => {
  const { cart, clearedAll } = useDesertSore();
  const [isOpen, setIsOpen] = useState(false);
  function totals(property) {
    return cart.reduce((totalPrice, item) => totalPrice + item[property], 0);
  }
  const cartTotalCount = totals("quantity");
  const cartTotal = totals("totalPrice");
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="bg-rose_50 my-9 md:my-0 p-4 pb-8 w-full md:basis-[50%] lg:basis-[30%] rounded-md drop-shadow-lg"
      >
        <h2 className="text-red font-bold text-xl">
          Your Cart ({cartTotalCount})
        </h2>
        {cart.length > 0 && (
          <>
            <ul>
              {cart.map((cartItems) => (
                <li
                  key={cartItems.name}
                  className="flex justify-between gap-2 py-4 border-rose_100 border-b-[0.5px] items-center"
                >
                  <div className="left">
                    <h6 className="text-rose_900 font-bold text-sm mb-1">
                      {cartItems.name}
                    </h6>
                    <span className="text-red font-bold mr-2">
                      {cartItems.quantity}x
                    </span>
                    <span className="text-rose_500 mr-1">
                      @ ${cartItems.price.toFixed(2)}
                    </span>
                    <span className="text-rose_500 font-semibold">
                      ${cartItems.totalPrice.toFixed(2)}
                    </span>
                  </div>
                  <button
                    className="right  rounded-full w-5 h-5 border-rose_500 border-[1px] p-1 block"
                    onClick={() => clearedAll(cartItems.id)}
                  >
                    <img src="/images/icon-remove-item.svg" alt="remove Item" />
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex justify-between gap-2 py-4 items-center">
              <h6 className="text-rose_00  text-sm mb-1">Order Total</h6>
              <h3 className="text-rose_900 font-bold text-2xl">
                ${cartTotal.toFixed(2)}
              </h3>
            </div>
            <p className="text-center p-3 bg-rose_100 flex item-center justify-center gap-1 rounded-md text-sm">
              <img src="/images/icon-carbon-neutral.svg" alt="" />
              This is a{" "}
              <span className="text-rose_900 font-semibold">
                carbon-neutral
              </span>{" "}
              delivery
            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="bg-red p-3 rounded-full w-full mt-8  text-white"
            >
              Confirm Order
            </button>
          </>
        )}
        {cart.length == 0 && (
          <>
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src="/images/illustration-empty-cart.svg"
              alt=""
              className="w-55 h-55 mx-auto my-10"
            />
            <motion.p
              initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
              whileInView={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-center text-rose_500 font-semibold"
            >
              Your added items will appear here
            </motion.p>
          </>
        )}
      </motion.div>
      <AnimatePresence>
        {isOpen && <Modal isOpen={isOpen} closeModal={closeModal} />}
      </AnimatePresence>
    </>
  );
};

export default Cart;

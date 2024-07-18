import React from "react";
import { createPortal } from "react-dom";
import useDesertSore from "../store/desertStore.ts";
import { motion } from "framer-motion";
const Modal = ({ isOpen, closeModal }) => {
  const { cart, reset } = useDesertSore();
  const cartTotal = cart.reduce(
    (totalPrice, item) => totalPrice + item.totalPrice,
    0
  );

  function handleSubmit() {
    reset();
    closeModal();
  }
  return createPortal(
    <div>
      {isOpen && (
        <div
          className="backdrop w-full h-full bg-[rgba(0,0,0,0.7)]   fixed top-0 left-0 z-20"
          onClick={closeModal}
        ></div>
      )}
      <motion.dialog
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        open={isOpen}
        className="top-[10%] mx-auto w-[100%] fixed  max-w-[600px] z-50 rounded-lg  bg-rose_50 p-8 px-5"
      >
        <img
          src="/images/icon-order-confirmed.svg"
          alt=""
          className="w-10 h-10"
        />
        <h2 className=" text-2xl my-2 mb-0 text-rose_900 font-bold">
          Order Confirmed
        </h2>
        <p className="text-rose_500">We hope you enjoy your food!</p>
        <ul className="p-5 py-3 bg-rose_100 my-5 rounded-md overflow-y-scroll h-[300px] flex flex-col  cart_list">
          {cart.map((cartItems) => (
            <li
              key={cartItems.name}
              className=" py-4 border-rose_300 border-b-[0.3px] items-center flex gap-4 "
            >
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                src={cartItems.image.desktop}
                alt={cartItems.name}
                className="w-20 h-20 rounded-lg object-contain  drop-shadow-lg"
              />
              <motion.div
                initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
                whileInView={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h6 className="text-rose_900 font-bold text-sm mb-1">
                  {cartItems.name}
                </h6>
                <span className="text-red font-bold mr-2">
                  {cartItems.quantity}x
                </span>
                <span className="text-rose_500 mr-1">
                  @ ${cartItems.price.toFixed(2)}
                </span>
              </motion.div>

              <motion.span
                initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
                whileInView={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-rose_500 ml-auto font-semibold"
              >
                ${cartItems.totalPrice.toFixed(2)}
              </motion.span>
            </li>
          ))}
          <li className="flex justify-between items-center my-4 pt-2 mt-auto">
            <h6 className="text-rose_900  text-sm mb-1 font-semibold">
              Order Total
            </h6>
            <h3 className="text-rose_900 font-bold text-2xl">
              ${cartTotal.toFixed(2)}
            </h3>
          </li>
        </ul>
        <button
          onClick={handleSubmit}
          className="bg-red p-3 rounded-full w-full mt-8  text-white"
        >
          Start New Order
        </button>
      </motion.dialog>
    </div>,
    document.getElementById("modal")!
  );
};

export default Modal;

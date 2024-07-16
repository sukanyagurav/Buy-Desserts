import { create } from "zustand";
import {devtools,persist} from 'zustand/middleware'

const initialState ={
    cart:[]
}

const desertStore = (set,get)=>({
    ...initialState,
    getItemQuantity:(id)=>{
        
        const currentQuantity = useDesertSore.getState().cart.filter(cartItem => cartItem?.id == id)
        return currentQuantity
       
    },
    addItem:(item)=>{
        set((state)=>{
            const existingCartIndex = state.cart.findIndex(cartItem => cartItem.id == item.id)
            const updatedItems =[...state.cart]
             
            if(existingCartIndex > -1){
                const existingItem  =state.cart[existingCartIndex]
                const updatedItem ={
                    ...existingItem,
                    quantity:existingItem.quantity + 1,
                    totalPrice:(existingItem.price * (existingItem.quantity + 1))
                }
                updatedItems[existingCartIndex] = updatedItem
            }else{
                updatedItems.push({...item,quantity:1,price:item.price,totalPrice:item.price})
            }
            return   {
           cart:[...updatedItems]
        }})
    },
    removeItem:(item)=>{
        set((state)=>{
            const existingCartIndex = state.cart.findIndex(cartItem => cartItem.id == item.id)
            const existingCartItem = state.cart[existingCartIndex]
            const updatedItems =[...state.cart]
            if(existingCartItem.quantity ===1){
                updatedItems.splice(existingCartIndex,1)
            }else{
                const updatedItem = {
                    ...existingCartItem,
                    quantity:existingCartItem.quantity - 1,
                    totalPrice:existingCartItem.totalPrice -  item.price
                }
                updatedItems[existingCartIndex] = updatedItem
            }
            return {
                cart:[...updatedItems]
            }
        })
    },
    clearedAll:(id)=>{
        set((state)=>{
            return {
                cart:state.cart.filter(item=>item.id !== id)
            }
        })
    },
    reset:()=>{
        set(initialState)
    }
})
const useDesertSore = create(
    devtools(
        persist(desertStore,{
            name:"cartItems"
        })
    )
)
export default useDesertSore
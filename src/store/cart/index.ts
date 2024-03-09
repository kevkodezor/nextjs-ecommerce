import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartProduct } from '@/interfaces';

interface State {
    cart: CartProduct[];
    addProduct: (product: CartProduct) => void;
    getItemsCart: () => number;
}

export const useCartStore = create<State>()(
    persist(    (set, get) => ({
        cart: [],
        addProduct: (product: CartProduct) => {
            const { cart } = get();
            const productExist = cart.some(
                (item) => item.id === product.id && item.size === product.size
            );

            if (!productExist) {
                set({ cart: [...cart, product ] });
                return;
            }

            const updateProductExist = cart.map(item => {
                if (item.id === product.id && item.size === product.size) {
                    return {...item, quantity: item.quantity + product.quantity}
                }
                return item;
            });
            set({ cart: updateProductExist });
        },
        getItemsCart: () => {
            const { cart } = get();
            const totalItems = cart.reduce((total, item) => total + item.quantity, 0 )
            return totalItems;
        }
    }) , { name: 'shop-cart' })

)

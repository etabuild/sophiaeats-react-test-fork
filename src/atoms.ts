import {atom} from "jotai"
import type {ReactNode} from "react";
import type {DishMenuItem} from "./features/dish-menu/type.ts";

export const navStateAtom = atom<'home' | 'menu' | 'favorite' | 'ticket'>('home')
// export const menuViewStateAtom = atom<'all'|'syokudo2'|'9cafe'>('all')
export const modalContentAtom = atom<ReactNode>()
export const isOpenModalAtom = atom<boolean>(false)
export const authStateAtom = atom<{
    uid: string | undefined
}>({uid: undefined})
export const menuLoadingAtom = atom<boolean>(true);
export const authLoadingAtom = atom<boolean>(true);
export const authErrorAtom = atom<string | null>(null);
export const dishMenuListAtom = atom<DishMenuItem[]>([])
export const inCartItemAtom = atom<{data: DishMenuItem, quantity: number}[]>([])
export const cartTotalAmountAtom = atom((get) => {
    const items = get(inCartItemAtom);
    return items.reduce((total, item) => total + (item.data.price * item.quantity), 0);
});
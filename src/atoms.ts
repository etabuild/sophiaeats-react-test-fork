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
export const inCartItemAtom = atom<{data: DishMenuItem, amount: number}[]>([])

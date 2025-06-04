import {atom} from "jotai"
import type {ReactNode} from "react";
export const navStateAtom = atom<'home'|'menu'|'favorite'|'ticket'>('home')
// export const menuViewStateAtom = atom<'all'|'syokudo2'|'9cafe'>('all')
export const modalContentAtom = atom<ReactNode>()
export const isOpenModalAtom = atom<boolean>(false)
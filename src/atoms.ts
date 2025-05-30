import {atom} from "jotai"
export const navStateAtom = atom<'home'|'menu'|'favorite'|'ticket'>('home')


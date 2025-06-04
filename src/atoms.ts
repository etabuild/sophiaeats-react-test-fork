import {atom} from "jotai"
export const navStateAtom = atom<'home'|'menu'|'favorite'|'ticket'>('home')
// export const menuViewStateAtom = atom<'all'|'syokudo2'|'9cafe'>('all')

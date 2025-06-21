import {useAtom, useAtomValue} from "jotai/index";
import {authStateAtom, inCartItemAtom} from "../../../atoms.ts";
import {useDishMenu} from "../../dish-menu/hooks/DishMenuHook.tsx"
import {useEffect, useState} from "react";
import {db} from "../../firebase/Firebase.tsx"
import {doc, updateDoc, arrayUnion, getDoc, onSnapshot, setDoc, collection, getDocs} from "firebase/firestore";

export const useCart = () => {
    const {searchMenuById} = useDishMenu()
    const [inCartItem, setInCartItem] = useAtom(inCartItemAtom)

    useEffect(() => {

    }, []);
    const authState = useAtomValue(authStateAtom)

    const cartListener = () => {
        console.log("cart hook")
        if(!authState.uid) return;
        const userDocRef = doc(db, 'users', authState.uid);

        const unsubscribe = onSnapshot(userDocRef, (snap) => {
            if (!snap.exists()) {
                return new Error("user doc does not exist")
            }
            try {
                const fetchedData =snap.data().cart
                const inCartItems =  fetchedData.map((item:{id: string, amount: number}) => {
                    return {
                        id:searchMenuById(item.id),

                        quantity: item.amount,
                    }
                })
                setInCartItem(inCartItems)
            } catch (e){

                return new Error("an error occured in fetching cart data:"+ e?.toString())
            }
        })
        return {unsubscribe};
    }


    const pickItem = async (id: string, amount: number) => {
        const menu = searchMenuById(id);


        const index = inCartItem.findIndex(({data}) => data.id === id)
        if (index > -1) {
            setInCartItem((prev) => {
                const _p = prev
                _p[index] = {
                    data: _p[index].data,
                    quantity: _p[index].quantity + amount
                }
                return _p
            })
        } else {
            setInCartItem((prev) =>
                [...prev,
                    {
                        data: menu,
                        quantity: amount
                    }
                ])
        }

        if (authState.uid) {
            const cartItemRef = doc(db, 'users', authState.uid, 'cart', id);
            const cartItemSnap = await getDoc(cartItemRef);

            if (cartItemSnap.exists()) {
                await updateDoc(cartItemRef, {
                    amount: cartItemSnap.data().amount + amount
                });
            } else {
                await setDoc(cartItemRef, {
                    amount: amount
                });
            }
        }


    }


    const fetchCart = async () => {
        console.log("fetching cart")
        if (!authState.uid) return;
        try {
            const cartCollectionRef = collection(db, 'users', authState.uid, 'cart');
            const cartSnapshot = await getDocs(cartCollectionRef);
            const inCartItems = cartSnapshot.docs.map(doc => {
                return {
                    data: searchMenuById(doc.id),
                    quantity: doc.data().amount
                }
            });
            console.log(inCartItems)
            setInCartItem(inCartItems);
        } catch (error) {
            return new Error("an error occurred in fetching cart data"+error?.toString());
        }
    }


    const changeItemQuantity = async (id: string, quantity: number) => {
        const index = inCartItem.findIndex(({data}) => data.id === id)
        if (index > -1) {
            setInCartItem((prev) => {
                const _p = [...prev]
                _p[index] = {
                    data: _p[index].data,
                    quantity: quantity
                }
                return _p
            })

            if (authState.uid) {
                const cartItemRef = doc(db, 'users', authState.uid, 'cart', id);
                await updateDoc(cartItemRef, {
                    amount: quantity
                });
            }
        } else {
            throw new Error("Item not found in cart")
        }
    }

    const deleteItem = (deleteId: string) => {
        const index = inCartItem.findIndex(({data}) => data.id === deleteId)
        if (index > -1) {
            setInCartItem((prev) => {
                const _p = prev
                _p.splice(index, 1)
                return _p
            })
        } else {
            throw new Error("indexがなかった")

        }

    }
    return {pickItem, inCartItem, deleteItem, cartListener, fetchCart, changeItemQuantity}
}
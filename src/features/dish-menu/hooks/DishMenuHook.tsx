import {getDocs, collection} from "firebase/firestore"
import {db} from "../../firebase/Firebase.tsx"
import {useEffect, useState} from "react";
import type {DishMenuItem} from "../type.ts";
export const useDishMenu = () => {
    const [dishMenuList, setDishMenuList] = useState<DishMenuItem[]>([])
    const [loadingDishMenu, setLoading] = useState<boolean>(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const dishMenuSnapshot = await getDocs(collection(db, "menu"))
                const items:DishMenuItem[] = dishMenuSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    name_en: doc.data().name_en,
                    name_ja:doc.data().name_ja,
                    price: doc.data().price,
                    shop: doc.data().shop,
                    category: doc.data().category

                }))
                setDishMenuList(items)
            } catch(err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    },[])


    return{loadingDishMenu, dishMenuList}
}
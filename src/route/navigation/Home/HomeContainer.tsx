import {Home} from './Home.tsx'
import {useDishMenu} from "../../../features/dish-menu/hooks/DishMenuHook.tsx";
import {useAtom, useAtomValue} from "jotai/index";
import {authStateAtom, dishMenuListAtom, menuLoadingAtom} from "../../../atoms.ts";
import {useEffect} from "react";
export const HomeContainer = ()=>{
    const authState = useAtomValue(authStateAtom)
    useEffect(() => {
        console.log(authState.uid)
    }, [authState]);
    const isMenuLoading = useAtomValue(menuLoadingAtom)
    const [dishMenuList, setDishMenuList] = useAtom(dishMenuListAtom)
    const list = [{
        name: 'たぬきうどん',
        price: 330,
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Nikuudon.jpg/250px-Nikuudon.jpg',
    },
        {
            name: '醬油ラーメン',
            price: 420,
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Shoyu_ramen%2C_at_Kasukabe_Station_%282014.05.05%29_1.jpg/330px-Shoyu_ramen%2C_at_Kasukabe_Station_%282014.05.05%29_1.jpg'
        },

        {
            name: 'イーグルランチ',
            price: 480,
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Salad_platter02_crop.jpg'
        },
        {
            name: 'ヴィーガン定食',
            price: 600,
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Plant-Based_Dishes%2C_Raw_Food_%2829103285347%29.jpg/1200px-Plant-Based_Dishes%2C_Raw_Food_%2829103285347%29.jpg'
        },
        {
            name: '鶏唐揚げ定食',
            price: 550,
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiaNt5ObLITauyY8OnKHSmXlvIkAOYVIVLMw&s'
        },
        {
            name: 'カツカレー',
            price: 450,
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Katsu-curry_003.jpg'
        },
    ]
    return(
        <Home dishMenuList={dishMenuList} isLoading={isMenuLoading} />
    )
}
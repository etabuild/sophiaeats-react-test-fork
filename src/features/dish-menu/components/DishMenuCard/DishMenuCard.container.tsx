import {useModal} from "../../../../comps/ui/modal/Modal.tsx";
import {DishMenuCard} from "./DishMenuCard.tsx";
import {AddItemModal} from "../../../pick-dish/components/AddItemModal/AddItemModal.tsx";
import {useCart} from "../../../pick-dish/hooks/CartHook.tsx";

export const DishMenuCardContainer = (
    { imgSrc, name,price,id }: {imgSrc: string, name: string , price: number, id: string}
) => {
    const {openModal} = useModal()
    const {pickItem} = useCart()
    return(
        <DishMenuCard imgSrc={imgSrc} name={name} price={price} addDish={()=>{
            console.log("Adding dish")
            pickItem(id, 1)
            openModal(
                <>
                    <AddItemModal />
                </>
            )
        }}/>
    )

}
import {useModal} from "../../../../comps/ui/modal/Modal.tsx";
import {DishMenuCard} from "./DishMenuCard.tsx";
import {AddItemModal} from "../../../../comps/ui/modal/AddItemModal.tsx";

export const DishMenuCardContainer = (
    { imgSrc, name,price }: {imgSrc: string, name: string , price: number}
) => {
    const {openModal} = useModal()
    return(
        <DishMenuCard imgSrc={imgSrc} name={name} price={price} addDish={()=>{
            console.log("Adding dish")
            openModal(
                <>
                    <AddItemModal />
                </>
            )
        }}/>
    )

}
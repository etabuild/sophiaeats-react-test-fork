import {XScrollPanels} from "../../../comps/ui/panel/XScrollPanels.tsx";
import {Panel} from "../../../components/ui/Panel"
import {CardGridView} from "../../../comps/ui/cardGrid/CardGridView.tsx";
import {CardMenu} from "../../../comps/ui/cardGrid/CardMenu.tsx";
import {CardGrid} from "../../../components/ui/CardGrid";
import {DishMenuCard} from "../../../features/dish-menu/components/DishMenuCard";
import {XScrollView} from "../../../components/ui/XScrollView";
import type {DishMenuItem} from "../../../features/dish-menu/type.ts";

export const Home = ({dishMenuList}:{
    dishMenuList: DishMenuItem[]
}) => {
    return(
        <>
            <div className={"home"}>
                <XScrollView>
                    <Panel size={'large'} title={'学生食堂'} subtitle={'2号館5階'}
                           imgSrc={"https://www.sophia.ac.jp/assets/uploads/2022/11/2%E5%8F%B7%E9%A4%A85F_%E5%AD%A6%E7%94%9F%E9%A3%9F%E5%A0%82_7726-1024x683.jpg"}
                           keyColor={'#FF5686'}/>

                    <Panel size={'large'} title={'9CAFE'} subtitle={'9号館地下'}
                           imgSrc={"https://piloti.sophia.ac.jp/assets/uploads/exports/jpn/studentlife/support/shisetsu/gakunai/itd24t00000018ld-img/9Cafe.jpg"}
                           keyColor={'#FF972F'}/>

                </XScrollView>
                <div className={'menuSection'}>
                    <p className={"menuSectionTitle"}>おすすめメニュー</p>

                    <CardGrid>
                        {dishMenuList.map((item, index) => {
                            return (
                                <DishMenuCard imgSrc={''} name={item.name_ja} price={item.price} key={index} id={item.id}></DishMenuCard>

                            )
                        })}

                    </CardGrid></div>
            </div>
        </>
    )
}
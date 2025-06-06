import {XScrollPanels} from "./controls/panel/XScrollPanels.tsx";
import {Panel} from "./controls/panel/Panel.tsx";
import {CardGridView} from "./controls/cardGrid/CardGridView.tsx";
import {CardMenu} from "./controls/cardGrid/CardMenu.tsx";

export function Home() {
    const list = [{
        name: 'たぬきうどん',
        price: 330,
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Nikuudon.jpg/250px-Nikuudon.jpg'
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
    return (
        <>
            <div className={"home"}>
                <XScrollPanels>
                    <Panel size={'large'} title={'学生食堂'} subtitle={'2号館5階'}
                           imgSrc={"https://www.sophia.ac.jp/assets/uploads/2022/11/2%E5%8F%B7%E9%A4%A85F_%E5%AD%A6%E7%94%9F%E9%A3%9F%E5%A0%82_7726-1024x683.jpg"}
                           keyColor={'#FF5686'}/>

                    <Panel size={'large'} title={'9CAFE'} subtitle={'9号館地下'}
                           imgSrc={"https://piloti.sophia.ac.jp/assets/uploads/exports/jpn/studentlife/support/shisetsu/gakunai/itd24t00000018ld-img/9Cafe.jpg"}
                           keyColor={'#FF972F'}/>

                </XScrollPanels>
                <div className={'menuSection'}>
                    <p className={"menuSectionTitle"}>おすすめメニュー</p>

                    <CardGridView>
                        {list.map((item, index) => {
                            return (
                                <CardMenu price={item.price} name={item.name} imgSrc={item.imgSrc}
                                          key={index}></CardMenu>

                            )
                        })}

                    </CardGridView></div>
            </div>

        </>
    )
}
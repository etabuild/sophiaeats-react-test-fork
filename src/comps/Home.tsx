import {XScrollPanels} from "./controls/XScrollPanels.tsx";
import {Panel} from "./controls/Panel.tsx";
import {CardGridView} from "./controls/cardGrid/CardGridView.tsx";
import {CardMenu} from "./controls/cardGrid/CardMenu.tsx";
export function Home(){
    return(
        <>
            <div className={"home"}>
                <XScrollPanels>
                    <Panel size={'large'} title={'学生食堂'} subtitle={'2号館5階'} keyColor={'#FF5686'} />

                    <Panel size={'large'} title={'9CAFE'} subtitle={'9号館地下'} keyColor={'#FF972F'} />

                </XScrollPanels>
                <div className={'menuSection'}>
                <p className={"menuSectionTitle"}>おすすめメニュー</p>

                <CardGridView>
                    <CardMenu></CardMenu>
                    <CardMenu></CardMenu>
                    <CardMenu></CardMenu>
                    <CardMenu></CardMenu>
                    <CardMenu></CardMenu>
                    <CardMenu></CardMenu>
                    <CardMenu></CardMenu>
                    <CardMenu></CardMenu>
                    <CardMenu></CardMenu>
                    <CardMenu></CardMenu>
                </CardGridView></div>
            </div>

        </>
    )
}
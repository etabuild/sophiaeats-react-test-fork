import {XScrollPanels} from "./controls/XScrollPanels.tsx";
import {Panel} from "./controls/Panel.tsx";
export function Home(){
    return(
        <>
            <div>
                <XScrollPanels>
                    <Panel size={'large'} title={'学生食堂'} subtitle={'2号館5階'} keyColor={'#FF5686'} />

                    <Panel size={'large'} title={'9CAFE'} subtitle={'9号館地下'} keyColor={'#FF972F'} />

                </XScrollPanels>
            </div>
        </>
    )
}
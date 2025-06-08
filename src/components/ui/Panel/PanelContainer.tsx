import {Panel} from './Panel.tsx'
import type {PanelItemProps} from "./index.ts";
export const PanelContainer = ({size, title, subtitle, keyColor, imgSrc}:PanelItemProps) => {
    return (
        <Panel size={size} title={title} subtitle={subtitle} keyColor={keyColor} imgSrc={imgSrc}></Panel>
    );
};
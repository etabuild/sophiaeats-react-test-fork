import type {NavigateFunction} from "react-router-dom";

export {PageLayoutContainer as PageLayout} from './PageLayoutContainer';
export type PageLayoutProps = {
    pageIcon: string
    pageTitle: string
    navigate: NavigateFunction
    navigatePath: string
    children?: React.ReactNode
}
import {PageLayout} from "./PageLayout"
import type {PageLayoutProps} from "./index.ts";
export const PageLayoutContainer = ({pageIcon, pageTitle, children, navigate}: PageLayoutProps) => {
    return (
        <PageLayout navigate={navigate} pageIcon={pageIcon} pageTitle={pageTitle}>{children}</PageLayout>
    );
};
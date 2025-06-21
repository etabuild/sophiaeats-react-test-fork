import {useEffect} from "react";
import chroma from "chroma-js"
export const ThemeProvider = ({children}:{children:React.ReactNode}) => {
/*
    const primaryColor = "#d3170b"
*/
    const primaryColor = "#d3170b"

    /*
        const baseColor = "#ffa908"
    */

    const baseColor = /*"#FFD85C"*/"#ff8108"
    const baseColorTint = "#FFE6CE"

    const f = chroma.scale([baseColor, "white"])

    const color = {
        primary: primaryColor,
        primaryTint:f(0.8).css('rgb')
    }
    console.log(color)
    useEffect(() => {
        const primaryTint = chroma(primaryColor).brighten();
        console.log(primaryTint)
        const root = document.documentElement;
        const html = document.querySelector('html');
        const body = document.querySelector('body');

        html?.style.setProperty('background', color.primaryTint);
        body?.style.setProperty('background', color.primaryTint);

        root.style.setProperty('--color-primary', color.primary);
        root.style.setProperty('--color-primary-tint', color.primaryTint);

        /*
                root.style.setProperty('--color-primary-tint', "#FFE6CE");
                        root.style.setProperty('--color-primary', #EC473D);

        */

        root.style.setProperty('border-radius', '100px');

    }, []);
    return (
        <>

            {children}
            </>
    );
};
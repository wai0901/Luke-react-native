import React from "react";
import { SvgXml } from "react-native-svg";


export default function SvgFile(){
    const lukeLogo = `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.45 26.97"><defs><style>.cls-1{fill:#fff;}.cls-2{fill:#231f20;}</style></defs><rect y="0.13" width="26.43" height="26.43"/><rect class="cls-1" x="20.81" y="0.13" width="1.03" height="26.43"/><path class="cls-2" d="M961,547.31c0,1.78,0,4.75,0,5.5h-.74c0-.64-.08-3.51,0-5.11-1.17,3.76-3.44,5.53-7.44,5.53-3.4,0-7.06-1.56-7.06-7.33V535h.75v11c0,3.54,1.74,6.55,6.34,6.55,5.35,0,7.41-4,7.41-9V535H961Z" transform="translate(-914.55 -526.33)"/><path class="cls-2" d="M971.87,542.74c1.85-1.88,6-5.7,8.51-8.11h6l-7.91,7,8.72,11.2h-6.09l-6.17-8.4-3,2.55v5.85h-5V526.33h5Z" transform="translate(-914.55 -526.33)"/><path class="cls-2" d="M989.7,543.88c.07,5.6,3.4,8.75,7.9,8.75,3.83,0,6.17-1.91,7.23-4.25h.82c-1.14,2.73-3.8,4.92-8,4.92-6.31,0-8.68-5-8.68-9.35,0-5.5,3.36-9.43,8.68-9.43,6.66,0,8.4,5.17,8.4,8.61v.75Zm15.56-.68c-.15-4.36-2.34-8-7.73-8-4.71,0-7.62,3.58-7.8,8Z" transform="translate(-914.55 -526.33)"/></svg>`

    const SvgFile = () => <SvgXml xml={lukeLogo} width='100' height='100' />

    return <SvgFile />
}
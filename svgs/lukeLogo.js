import React from "react";
import { SvgXml } from "react-native-svg";


export default function SvgFile(){
    const lukeLogo = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 91.4 27" style="enable-background:new 0 0 91.4 27;" xml:space="preserve">
        <style type="text/css">
           .st0{fill:#C8C8C8;}
        </style>
        <rect y="0.1" class="st0" width="19.6" height="26.4"/>
        <rect x="21.8" y="0.1" class="st0" width="4.6" height="26.4"/>
        <path class="st0" d="M46.5,21c0,1.8,0,4.8,0,5.5h-0.7c0-0.6-0.1-3.5,0-5.1c-1.2,3.8-3.4,5.5-7.4,5.5c-3.4,0-7.1-1.6-7.1-7.3V8.7H32
           v11c0,3.5,1.7,6.5,6.3,6.5c5.3,0,7.4-4,7.4-9V8.7h0.7V21z"/>
        <path class="st0" d="M57.3,16.4c1.8-1.9,6-5.7,8.5-8.1h6l-7.9,7l8.7,11.2h-6.1l-6.2-8.4l-3,2.5v5.8h-5V0h5L57.3,16.4z"/>
        <path class="st0" d="M75.2,17.5c0.1,5.6,3.4,8.8,7.9,8.8c3.8,0,6.2-1.9,7.2-4.3h0.8c-1.1,2.7-3.8,4.9-8,4.9c-6.3,0-8.7-5-8.7-9.3
           c0-5.5,3.4-9.4,8.7-9.4c6.7,0,8.4,5.2,8.4,8.6v0.8H75.2z M90.7,16.9c-0.2-4.4-2.3-8-7.7-8c-4.7,0-7.6,3.6-7.8,8H90.7z"/>
        </svg>`

    const SvgFile = () => <SvgXml xml={lukeLogo} width='100' height='100' />

    return <SvgFile />
}
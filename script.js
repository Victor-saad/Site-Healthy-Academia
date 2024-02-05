import { mobileFunction } from "./Header/JS/scriptMobile.js";
import { desktopFunction } from "./Header/JS/scriptDesktop.js";
import { scriptMainMobile } from "./Main/JS/scriptMobile.js";
import { scriptMainDesktop } from "./Main/JS/scriptDesktop.js";
import { GlideJs } from "./Main/JS/scriptGlideJs.js";

if (window.innerWidth <= 768) {
    mobileFunction();
    scriptMainMobile();
    GlideJs();
}
else {
    desktopFunction();
    scriptMainDesktop();
}
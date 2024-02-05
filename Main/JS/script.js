import { scriptMainMobile } from "./scriptMobile";
import { scriptMainDesktop } from "./scriptDesktop";
import { GlideJs } from "./scriptGlideJs";

if (window.innerWidth <= 768) {
    scriptMainMobile();
    GlideJs();
}
else {
    scriptMainDesktop();
}
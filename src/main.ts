import {createBackground} from "./background/background.ts";
import {createFooter} from "./footer/footer.ts";
import {createApp} from "./app/app.ts";

const body = document.querySelector("body")!;
body.appendChild(createApp());
body.appendChild(createBackground());
body.appendChild(createFooter());

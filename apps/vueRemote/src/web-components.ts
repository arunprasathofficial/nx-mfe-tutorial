import { defineCustomElement } from "vue";
import App from "./app/App.vue";

const VueRemote = defineCustomElement(App, { shadowRoot: false });

if (!customElements.get('vue-remote')) {
    customElements.define('vue-remote', VueRemote);
}
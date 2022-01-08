import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import CurrencyConverter from './components/CurrencyConverter.vue';
import store from "./store";

const app = createApp(App);
app.use(store);
app.use(router);
app.component('currency-converter', CurrencyConverter);
app.mount("#app");

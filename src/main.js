import Vue from "vue";
import App from "./app";
//引入子的全局组件
import subVue from "./components/sub.vue";

Vue.component("subVue", subVue);

new Vue({
    el: "#app",
    render: c => c(App)

})
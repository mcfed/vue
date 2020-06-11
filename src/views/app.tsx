// import  Vue, { CreateElement }  from "vue";
// import Component from 'vue-class-component'
import HelloWorld from "../components/HelloWorld.vue";
import { Component, Vue } from "vue-property-decorator";
import { CreateElement } from "vue";

@Component
export default class ListView extends Vue {
  render(h: CreateElement) {
    return h("div", {}, [h(HelloWorld)]);
  }
}

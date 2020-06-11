import Vue, { CreateElement } from "vue";
import Component from "vue-class-component";

@Component
export default class App extends Vue {

  render(h: CreateElement) {
    return (<div id="root">
          hello
      <router-view></router-view>
    </div>)
  }
}

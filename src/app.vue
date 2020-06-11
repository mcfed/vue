<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue, { CreateElement } from "vue";
import Component from "vue-class-component";

@Component({})
export default class App extends Vue {
}
</script>


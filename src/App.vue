<template>
  <div>
    <q-layout
      view="hHh Lpr lff"
      container
      style="height: 100vh"
      class="shadow-2 rounded-borders app-bg"
    >
      <!-- -->
      <Header
        @emitDrawerClick="emitDrawerClick($event)"
        v-if="IsAuthenticated"
      />
      <Sidebar />
      <q-page-container>
        <q-page>
          <router-view :key="$route.fullPath"></router-view>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref } from "vue";
import Header from "@/components/layout/TheHeader.vue";
import Sidebar from "@/components/layout/TheLeftSidebar.vue";
//import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "LayoutDefault",

  components: {
    //  HelloWorld,
    Header,
    Sidebar,
  },

  setup() {
    return {
      leftDrawerOpen: ref(false),
    };
  },
};
</script>

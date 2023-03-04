<template>
  <div>
    <q-header elevated class="" style="background-color: #1d3253">
      <q-toolbar>
        <q-btn flat @click="drawerClick()" round dense icon="menu" />
        <q-breadcrumbs>
          <q-breadcrumbs-el
            v-for="breadItem in listOfBreadItems"
            :label="breadItem"
            style="font-size: 1rem"
            :key="breadItem"
          />
        </q-breadcrumbs>
      </q-toolbar>
    </q-header>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      isDrawerOpen: true,
    };
  },
  computed: {
    // isDrawerOpen() {
    //   return this.drawerOpen;
    // },
  },
};
</script>

<style></style>

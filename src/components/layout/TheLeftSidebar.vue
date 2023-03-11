<template>
  <div>
    <q-drawer
      v-model="isDrawerOpen"
      show-if-above
      :mini="!isDrawerOpen || miniState"
      :width="200"
      :breakpoint="200"
      bordered
      content-class="bg-grey-3 bg-blue-9"
    >
      <q-scroll-area class="fit" style="">
        <q-list padding>
          <q-item clickable v-ripple @click="homeClicked()">
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>
            <q-item-section> Home </q-item-section>
            <q-tooltip
              :delay="500"
              anchor="center right"
              self="center left"
              :offset="[10, 10]"
            >
              Home
            </q-tooltip></q-item
          >
          <q-item clickable v-ripple @click="movieSearchClicked()">
            <q-item-section avatar>
              <q-icon name="movie" />
            </q-item-section>
            <q-item-section> Movie </q-item-section>
            <q-tooltip
              :delay="500"
              anchor="center right"
              self="center left"
              :offset="[10, 10]"
            >
              Search for Movies
            </q-tooltip>
          </q-item>

          <q-item clickable v-ripple @click.capture="drawerClick">
            <q-item-section avatar>
              <q-btn
                dense
                round
                unelevated
                color="blue-10"
                :icon="this.miniState ? 'chevron_right' : 'chevron_left'"
              />
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
  </div>
</template>

<script>
export default {
  name: "TheLeftSidebar",
  data() {
    return {
      drawer: false,
      miniState: true,
    };
  },
  computed: {
    isDrawerOpen() {
      return this.$store.state.drawerOpen;
    },
  },
  methods: {
    drawerClick(e) {
      this.miniState = !this.miniState;
      e.stopPropagation();
    },
    movieSearchClicked() {
      this.$router.push({
        path: "/movie/search",
      });
    },
    homeClicked() {
      this.$router.push({
        path: "/",
      });
    },
  },
};
</script>

<style></style>

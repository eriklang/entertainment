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
              <!-- <img src="../../assets/image/new_penn.png" /> -->
            </q-item-section>
            <q-item-section> Entertainment </q-item-section>
            <q-tooltip
              :delay="500"
              anchor="center right"
              self="center left"
              :offset="[10, 10]"
            >
              Home
            </q-tooltip></q-item
          ></q-list
        >
        <q-item clickable v-ripple @click="userSearchClicked()">
          <q-item-section avatar>
            <q-icon name="perm_identity" />
          </q-item-section>
          <q-item-section> Search </q-item-section>
          <q-tooltip
            :delay="500"
            anchor="center right"
            self="center left"
            :offset="[10, 10]"
          >
            Search for Movies
          </q-tooltip>
        </q-item>
      </q-scroll-area>
    </q-drawer>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

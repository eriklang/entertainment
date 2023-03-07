<template>
  <div class="text-center">
    <span class="text-weight-bold">{{ this.title }}</span>
  </div>

  <div class="q-pl-md">
    <div class="row col-12 basic-row">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <div class="row col-12">
          <div class="col">
            <div class="row col-12">
              <div class="col" style="width: 300px">
                <q-input
                  outlined
                  :placeholder="searchText"
                  v-model="searchInput"
                  dense
                  class="col-16 q-pr-xs"
                  ref="by_firstinput"
                />
              </div>
              <div class="row">
                <div class="col" style="display: flex; height: 100%">
                  <q-btn
                    class="btn-success-bg col-4 basic-search-btn um-button-label"
                    label="Search"
                    icon="search"
                    flat
                    type="submit"
                    @mousedown.prevent
                    style="display: inline-block; align-self: flex-end"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-form>
    </div>
    <div class="q-mt-sm"></div>
  </div>
</template>

<script>
export default {
  name: "SearchHeader",
  props: {
    searchText: { type: String, required: true },
    title: { type: String },
    apiCall: { type: String, required: true },
  },
  data() {
    return {
      searchInput: "",
    };
  },
  methods: {
    onSubmit() {
      let bNoSearchCriteria = false;

      //validate that we have something to seach
      bNoSearchCriteria = !this.searchInput;
      if (bNoSearchCriteria) {
        this.$q.notify({
          message: "Please enter in some search criteria",
          color: "red",
          position: "top",
        });
        return;
      }

      this.$store.dispatch(this.apiCall, this.searchInput);
    },
  },
};
</script>

<style></style>

<template>
  <SearchHeader
    searchText="Search for movie by title"
    title="Movie Search"
    apiCall="movieSearch"
  ></SearchHeader>
  <search-list></search-list>
</template>

<script>
import SearchHeader from "../shared/searchheader.vue";
import SearchList from "./searchList.vue";

export default {
  name: "MovieSearch",
  components: { SearchHeader, SearchList },
  data() {
    return {
      loading: false,
    };
  },
};
</script>

<style></style>

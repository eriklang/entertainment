<template>
  <div>{{ movieId }}</div>
</template>

<script>
export default {
  name: "MovieDetail",
  data() {
    return {};
  },
  methods: {},
  computed: {
    movieId() {
      return String(this.$route.params?.id);
    },
  },
};
</script>

<style></style>

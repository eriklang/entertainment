<template>
  <div>
    <div class="row">
      <div class="col">
        <img :src="this.results.image?.url" height="100" width="100" />
      </div>
      <!-- <div class="col">{{ this.results.title }}</div> -->
    </div>
    <table>
      <tr>
        <td>Title</td>
        <td>{{ this.results.title }}</td>
      </tr>
      <tr>
        <td>Run Time</td>
        <td>{{ this.results.seriesStartYear }} - {{ this.seriesEnd }}</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
      </tr>
    </table>

    <div class="row">
      <div class="col"></div>
      <div class="col"></div>
    </div>

    <div>{{ this.results }}</div>
  </div>
</template>

<script>
import apiService from "@/apiService";
export default {
  name: "MovieDetail",
  data() {
    return {
      results: {},
    };
  },
  methods: {},
  computed: {
    movieId() {
      let t = String(this.$route.params?.id);
      t = t.replace("/title/", "").replace("/", "");
      //t = t.replace("/", "");
      return t;
    },
    seriesEnd() {
      if (this.results.seriesEnd) return this.results.seriesEnd;
      else return "Current";
    },
  },
  mounted() {
    apiService
      .getTitleById(this.movieId)
      .then((r) => {
        console.log("zzz", r);
        this.results = r?.data;
      })
      .catch((err) => {
        console.error("error", err);
      })
      .finally(() => {
        // this.loading = false;
      });
  },
};
</script>

<style></style>

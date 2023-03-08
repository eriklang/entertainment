<template>
  <div>
    <q-table
      :rows="this.resultDetails"
      :columns="columns"
      row-key="id"
      :dense="true"
      rowsPerPage:25
      :rows-per-page-options="[25]"
      v-model:pagination="pagination"
    >
      <template v-slot:body="props">
        <q-tr :props="props" @click="goToDetail(props.row.id)">
          <q-td key="image" :props="props">
            <img :src="props.row.image?.url" height="100" width="100" />
          </q-td>
          <q-td>{{ props.row.title }}</q-td>
          <q-td>{{ props.row.titleType }}</q-td>
          <q-td>{{ props.row.year }}</q-td>
        </q-tr></template
      >
    </q-table>
  </div>
</template>

<script>
export default {
  name: "MovieSearchList",
  data() {
    return {
      loading: false,
      pagination: {
        page: 0,
        rowsPerPage: 10,
      },
    };
  },
  computed: {
    columns() {
      return [
        {
          name: "image",
          label: "",
          field: "image",
          align: "left",
          headerStyle: "font-weight: bold;",
        },
        {
          name: "title",
          label: "Title",
          field: "title",
          align: "left",
          headerStyle: "font-weight: bold;",
        },
        {
          name: "titleType",
          label: "Type",
          field: "titleType",
          align: "left",
          headerStyle: "font-weight: bold;",
        },
        {
          name: "year",
          label: "Year",
          field: "year",
          align: "left",
          headerStyle: "font-weight: bold;",
        },
      ];
    },
    resultDetails() {
      return this.$store.state.movieSearchResults;
    },
  },
  methods: {
    goToDetail(id) {
      console.log("id", id);
      this.$router.push({
        name: "MovieDetail",
        params: { id: id },
      });
    },
  },
};
</script>

<style></style>

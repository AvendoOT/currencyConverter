<template>
  <div class="container">
    <div class="movie-info-container">
      <p>{{ name }}</p>
      <button class="button-class" v-on:click="deleteCurrency">
        Delete currency from wait list
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name"],
  methods: {
    deleteCurrency() {
      this.$store.commit({
        type: "deleteCurrency",
        currencyName: this.name,
      });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  margin-bottom: 2px;
}
.movie-info-container {
  display: flex;
  flex-direction: column;
  margin-left: 2px;
}
.button-class {
  height: 20px;
}
</style>

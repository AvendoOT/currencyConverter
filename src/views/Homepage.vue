<template>
  <div>
    <img alt="wallet logo" src="../assets/icon.png" />
    <form v-on:submit.prevent="addCurrency">
      <input
        type="text"
        class="form-control"
        placeholder="input currency to be added"
        v-model.trim="name"
        @submit="addCurrency"
      />
    </form>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  emits: ["getMsgEmit"],
  data() {
    return {
      name: "",
      msg: "",
    };
  },
  methods: {
    addCurrency() {
      this.$store.commit({
        type: "addCurrency",
        name: this.name,
      });
      this.msg = "You've requested " + this.name + " to be added";
      this.name = "";
    },
  },
};
</script>

<style scoped>
img {
  margin: 40px 0 0;
  width: 50px;
  height: 50px;
}
</style>

<template>
  <div>
    <h4>Press enter upon entering value</h4>
    <form v-on:submit.prevent="exchange">
      <div class="form-group row">
        <label for="start-currency" class="col-sm-4 col-form-label">From</label>
        <div class="col-8">
          <input
            type="number"
            class="form-control"
            placeholder="0"
            v-model.number="startValue"
            @keyup="exchange"
          />
        </div>
        <select name="currencies" v-model="startCurrency" @keyup="exchange">
          <option value="" disabled selected>Select</option>
          <option
            v-for="item in exchangeRateList"
            :key="item"
            :value="item.name"
          >
            {{ item.name.toUpperCase() }}
          </option>
        </select>
      </div>
      <br />
      <div class="form-group row">
        <label for="end-currency" class="col-4 col-form-label">To</label>
        <div class="col-8">
          <input
            type="number"
            class="form-control"
            placeholder="0"
            v-model.number="finalValue"
            disabled
          />
        </div>
        <select name="currencies" v-model="finalCurrency" @keyup="exchange">
          <option value="" disabled selected>Select</option>
          <option
            v-for="item in exchangeRateList"
            :key="item"
            :value="item.name"
          >
            {{ item.name.toUpperCase() }}
          </option>
        </select>
      </div>
    </form>
    <p>
      Rate from {{ startCurrency.toUpperCase() }} to
      {{ finalCurrency.toUpperCase() }}
    </p>
    <br />
    <button v-on:click.stop="switchCurrency">Switch currencies</button>
    <br />
  </div>
</template>


<script>
export default {
  props: ["exchangeRateList"],
  data() {
    return {
      startValue: 1,
      startCurrency: "hrk",
      finalValue: 0.13,
      finalCurrency: "eur",
    };
  },
  methods: {
    exchange() {
      let index =
        this.exchangeRateList.find(
          (element) => element.name == this.startCurrency
        ).id - 1;
      if (this.finalCurrency == "hrk") {
        this.finalValue = this.startValue * this.exchangeRateList[index].toHrk;
      } else if (this.finalCurrency == "eur") {
        this.finalValue = this.startValue * this.exchangeRateList[index].toEur;
      } else if (this.finalCurrency == "usd") {
        this.finalValue = this.startValue * this.exchangeRateList[index].toUsd;
      } else if (this.finalCurrency == "rsd") {
        this.finalValue = this.startValue * this.exchangeRateList[index].toRsd;
      } else if (this.finalCurrency == "jpy") {
        this.finalValue = this.startValue * this.exchangeRateList[index].toJpy;
      }
    },
    switchCurrency() {
      let final = this.startCurrency;
      let finalVal = this.startValue;
      this.startCurrency = this.finalCurrency;
      this.finalCurrency = final;
      this.startValue = this.finalValue;
      this.finalValue = finalVal;
      this.$emit("buttonclickevent");
    },
  },
};
</script>

<style scoped>
input,
select {
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input:hover {
  background-color: #b48f92;
  color: white;
}

button {
  background-color: #4c7aaf;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

button:hover {
  background-color: #af4c54;
  color: white;
}
</style>

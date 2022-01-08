<template>
  <CurrencyList v-bind:currency-list="currencyList" />
</template>

<script>
import CurrencyList from "@/components/CurrencyList";

export default {
  components: { CurrencyList },
  computed: {
    currencyList() {
      return this.$store.state.requestedCurrencies;
    },
  },
};
</script>
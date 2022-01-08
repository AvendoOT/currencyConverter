<template>
  <div>
    <CurrencyCard
      v-for="item in currencyList"
      :key="item"
      v-bind:name="item"
    />
  </div>
</template>

<script>
import CurrencyCard from "@/components/CurrencyCard";
export default {
  components: { CurrencyCard },
  props: ["currencyList"],
};
</script>

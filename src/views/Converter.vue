<template>
  <div>
    <h2>Currency converter v1.0</h2>
    <div class="container-fluid p-2 d-flex justify-content-center">
      <CurrencyConverter v-bind:exchange-rate-list="exchanges" />
    </div>
  </div>
</template>

<script>
import { getExchanges } from "@/api/exchange";
import CurrencyConverter from "@/components/CurrencyConverter";

export default {
  components: { CurrencyConverter },
  data: function () {
    return {
      exchanges: [],
    };
  },
  async mounted() {
    this.exchanges = await getExchanges();
  },
};
</script>
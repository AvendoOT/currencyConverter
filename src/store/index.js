import {
  createStore
} from "vuex";

export default createStore({
  state: {
    requestedCurrencies: [],
  },
  mutations: {
    addCurrency(state, payload) {
      if (payload.name) {
        const updated = [...state.requestedCurrencies];
        updated.push(payload.name);
        state.requestedCurrencies = updated;
      }

    },

    deleteCurrency(state, payload) {
      state.requestedCurrencies = state.requestedCurrencies.filter(
        (item) => item !== payload.currencyName
      );
    },
  },
});
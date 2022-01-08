export async function getExchanges() {
  // eslint-disable-next-line no-unused-vars
  return new Promise(function (resolve, _) {
    setTimeout(() => {
      resolve(exchangeRateList);
    }, 500);
  });
}

// hrk, eur, usd, rsd, jpy
const exchangeRateList = [{
    id: 1,
    name: "hrk",
    toHrk: "1",
    toUsd: "0.15105629",
    toEur: "0.13295291",
    toRsd: "15.634201",
    toJpy: "17.457387",
  },
  {
    id: 2,
    name: "eur",
    toHrk: "7.5214601",
    toUsd: "1.1361668",
    toEur: "1",
    toRsd: "117.59233",
    toJpy: "131.30539",
  },
  {
    id: 3,
    name: "usd",
    toHrk: "6.6200487",
    toUsd: "1",
    toEur: "0.88015242",
    toRsd: "103.49918",
    toJpy: "115.56875",
  },
  {
    id: 4,
    name: "rsd",
    toHrk: "0.063962333",
    toUsd: "0.0096619127",
    toEur: "0.0085039559",
    toRsd: "1",
    toJpy: "1.1166152",
  },
  {
    id: 5,
    name: "jpy",
    toHrk: "0.057282341",
    toUsd: "0.0086528579",
    toEur: "0.0076158338",
    toRsd: "0.89556366",
    toJpy: "1",
  },
];
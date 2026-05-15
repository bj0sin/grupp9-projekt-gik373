const urlSCB1 =
  "https://api.scb.se/OV0104/v1/doris/sv/ssd/START/MI/MI1303/MI1303B/ExplVatmark";

const querySCB1 = {
  query: [
    {
      code: "Region",
      selection: {
        filter: "vs:RegionLän07EjAggr",
        values: [
          "01",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "12",
          "13",
          "14",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
        ],
      },
    },
    {
      code: "ContentsCode",
      selection: {
        filter: "item",
        values: ["000006WZ"],
      },
    },
  ],
  response: {
    format: "JSON",
  },
};

const request = new Request(urlSCB1, {
  method: "POST",
  body: JSON.stringify(querySCB1),
});

fetch(request)
  .then((response) => response.json())
  .then((data) => console.log(data));

// Faktakarusell knappar

import axios from "axios";
import qs from "qs";

const BASE_URL = "http://localhost:8088";

const baseAxios = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

baseAxios.interceptors.request.use(
  (config) => {
    console.log(
      `Method: ${config.method.toUpperCase()}\n` +
        `URL: ${BASE_URL}${config.url}\n` +
        `Params: ${JSON.stringify(config.params)}\n` +
        `Time: ${new Date().toLocaleString()}`
    );
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const printersApi = {
  getPrinters: (filters) =>
    baseAxios.get("/printers", {
      params: {
        filters: filters,
      },
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: "repeat" });
      },
    }),

  getPrinterTypes: () => baseAxios.get("/printers/types"),

  createPrinter: (printer) =>
    baseAxios.post("/printers", {
      brand: printer.brand,
      model: printer.model,
      power: printer.power,
      price: printer.price
    }),

  editPrinter: (printer) =>
    baseAxios.put("/printers", {
      id: printer.id,
      brand: printer.brand,
      model: printer.model,
      power: printer.power,
      price: printer.price
    }),

  deletePrinter: (id) => baseAxios.delete(`/printers/${id}`),
};

export default printersApi;

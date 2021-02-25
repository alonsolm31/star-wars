import axios from "axios";

let apiUrl = "https://swapi.dev/api";
var manageCallback = function (promise) {
  return new Promise((resolve, reject) => {
    promise
      .then(response => resolve(response.data))
      .catch(error => {
        reject(error.response ? error.response.data : error);
      });
  });
};

let client = {
  plain: {
    get: function (path, config) {
      return manageCallback(axios.get(path, config));
    },
    put: function (path, data, config) {
      return manageCallback(axios.put(path, data, config));
    },
    post: function (path, data, config) {
      return manageCallback(axios.post(path, data, config));
    },
    delete: function (path, config) {
      return manageCallback(axios.delete(path, config));
    }
  },
  get: function (path, config) {
    return client.plain.get(apiUrl + path, config);
  },
  put: function (path, data, config) {
    return client.plain.put(apiUrl + path, data, config);
  },
  post: function (path, data, config) {
    return client.plain.post(apiUrl + path, data, config);
  },
  delete: function (path, config) {
    return client.plain.delete(apiUrl + path, config);
  }
};

export default client;

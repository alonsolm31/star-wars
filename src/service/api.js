import client from "./client";

const swapi = {
  planets: {
    async alist() {
      return await client.get(`/planets/`);
    },
    list() {
      return client.get(`/planets/`);
    },
    getPlanet(id) {
      return client.get(`/planets/${id}`);
    }
  },
  films: {
    list() {
      return client.get(`/films/`);
    },
    getFilm(id) {
      return client.get(`/films/${id}`);
    }
  },
  people: {
    list() {
      return client.get(`/people/`);
    },
    getPeople(id) {
      return client.get(`/people/${id}`);
    }
  },
  species: {
    list() {
      return client.get(`/species/`);
    },
    getSpecies(id) {
      return client.get(`/species/${id}`);
    }
  },
  starships: {
    list() {
      return client.get(`/starships/`);
    },
    getStarships(id) {
      return client.get(`/starships/${id}`);
    }
  },
  vehicles: {
    list() {
      return client.get(`/vehicles/`);
    },
    getVehicles(id) {
      return client.get(`/vehicles/${id}`);
    }
  }
};

export default swapi;

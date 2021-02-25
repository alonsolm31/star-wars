<template>
  <div>
    <div class="card">
      <div class="right">
        <div class="list-people" v-for="people in peopleList" :key="people.id">
          <div
            class="people"
            @click="
              $router.push({
                name: 'character',
                params: { id: people.url.replace(/\D/g, '') },
              })
            "
          >
            {{ people.name }}
          </div>
        </div>
      </div>
      <div class="left">
        <div class="one-line">
          <h1>{{ film.title }}</h1>
          <h2 class="highlighted">Date {{ film.release_date }}</h2>
        </div>
        <div class="one-line">
          <h2>Episode {{ film.episode_id }}</h2>
          <h2 class="highlighted">{{ film.producer }}</h2>
        </div>
        <div class="opening-crawl">
          <h2>Opening crawl</h2>
          <br />
          <p class="highlighted">{{ film.opening_crawl }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swapi from "../service/api";
export default {
  name: "FilmDetail",
  data() {
    return {
      film: {},
      peopleList: [],
    };
  },
  mounted() {
      this.scrollToTop();
  },
  computed: {},
  created() {
    this.getFilm();
  },
  methods: {
    scrollToTop() {
            window.scrollTo(0,0);
    },
    getFilm() {
      console.log(this.$route.params.id);
      swapi.films.getFilm(this.$route.params.id).then((response) => {
        console.log(response);
        this.film = response;
        this.filterCharacters();
      });
    },
    filterCharacters() {
      this.film.characters.forEach((character) => {
        this.getPeople(character.replace(/\D/g, ""));
      });
    },
    getPeople(peopleId) {
      swapi.people.getPeople(peopleId).then((response) => {
        this.peopleList.push(response);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  letter-spacing: 2px;
  height: 100vh;
  width: 100vw;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%23b7b7b7' fill-opacity='0.17'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  display: flex;
  flex-direction: row;
}

.left {
  flex: 1.5;
  padding: 10vh;
}

.right {
  text-align: center;
  opacity: 0.8;
  font-family: "Lato", "Helvetica Neue", Arial, sans-serif;
  flex: 1;
  background-image: url("../assets/img/left.jpg");
  background-position: center;
  background-size: cover;
  .list-people {
    font-size: 1rem;
    font-weight: bold;
    color: #f8bc18;
    padding-top: 12px;
    .people {
      cursor: pointer;
    }
  }
}

.one-line {
  display: flex;
  justify-content: space-between;
}

.opening-crawl {
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    line-height: 25px;
  }
}

.highlighted {
  color: #808080;
}

button {
  width: 300px;
  height: 70px;
  position: fixed;
  right: 0;
  border: 0;
  bottom: 0;
  background-color: black;
  color: white;
  font-size: 1.6em;
  text-transform: uppercase;
}

@media (max-width: 700px) {
  h2 {
    font-size: 1.2em;
  }
  card {
    flex-direction: column;
  }
  right {
    display: block;
  }
  left {
    padding: 5vh;
  }
  button {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    right: 0;
  }

  .opening-crawl {
    padding-bottom: 20vh;
  }
}
</style>

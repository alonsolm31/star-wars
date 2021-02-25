<template>
  <div class="character-page">
    <div class="card">
      <div class="right">
        <span @mouseover="hover = true" @mouseleave="hover = false">
          Releted Films
        </span>
        <transition-group class="film" tag="ul" name="fade">
          <li v-show="hover" v-for="film in filmList" :key="film.episode_id">
            {{ film.title }}
          </li>
        </transition-group>
      </div>
      <div class="left">
        <div class="one-line">
          <h1>{{ people.name }}</h1>
        </div>
        <h2 class="highlighted">Birth year - {{ people.birth_year }}</h2>
        <div class="one-line">
          <h2>Gender - {{ people.gender }}</h2>
          <h2 class="highlighted">Date - {{ people.created }}</h2>
        </div>
        <div class="one-line">
          <h2></h2>
          <h2></h2>
        </div>
        <div class="one-line">
          <h2 class="highlighted">Hair color - {{ people.hair_color }}</h2>
          <h2 class="highlighted">Eye color - {{ people.eye_color }}</h2>
        </div>
        <div class="opening-crawl">
          <div class="transition">
            <span
              @mouseover="worldHover = true"
              @mouseleave="worldHover = false"
            >
              World
            </span>
            <div>
              <transition name="slide-fade">
                <span v-if="worldHover" class="highlighted">{{
                  planet.name
                }}</span>
              </transition>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swapi from "../service/api";
export default {
  name: "CharacterDetail",
  data() {
    return {
      people: {},
      filmList: [],
      planet: Object,
      hover: false,
      worldHover: false,
    };
  },
  mounted() {},
  created() {
    this.getPeople();
  },
  methods: {
    getPeople() {
      swapi.people.getPeople(this.$route.params.id).then((response) => {
        this.people = response;
        this.filterFilms();
        this.people ? this.getPlanet(this.people.homeworld) : "";
      });
    },
    filterFilms() {
      this.people.films.forEach((film) => {
        this.getFilms(film.replace(/\D/g, ""));
      });
    },
    getFilms(filmId) {
      swapi.films.getFilm(filmId).then((response) => {
        this.filmList.push(response);
      });
    },
    getPlanet(planet) {
      swapi.planets.getPlanet(planet.replace(/\D/g, "")).then((response) => {
        this.planet = response;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.character-details {
  .card {
    .right {
      .left {
        padding-left: 5rem;
      }
      .fade-enter-active,
      .fade-leave-active {
        transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
      }
      .fade-enter,
      .fade-leave-to {
        opacity: 0.5;
      }
    }
    .left {
      background-color: red;
    }
  }
}

.card {
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
  .opening-crawl {
    .transition {
      span {
        cursor: pointer;
        line-height: 60px;
        font-size: 3rem;
      }
      .slide-fade-enter-active {
        transition: all 0.3s ease;
      }
      .slide-fade-leave-active {
        transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
      }
      .slide-fade-enter, .slide-fade-leave-to
                    /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
      }
    }
  }
}

.right {
  text-align: center;
  font-size: 2rem;
  color: #b1850c;
  opacity: 0.8;
  padding-top: 20px;
  flex: 3;
  background-image: url("../assets/img/characters.jpg");
  background-position: center;
  background-size: cover;
  span {
    opacity: 1;
    cursor: pointer;
  }
  .film {
    font-size: 1.4rem;
    line-height: 30px;
    font-weight: bold;
    color: #f8bc18;
    padding-top: 12px;
  }

  .left {
    padding-left: 5rem;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}

.one-line {
  h2 {
    line-height: 60px;
  }
  h1 {
    line-height: 60px;
    font-size: 3rem;
  }
}

.opening-crawl {
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
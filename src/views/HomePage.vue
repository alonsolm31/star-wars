<template>
	<div class="home-page">
		<div class="grid">
      <div class="sort-buttons">
        <div>
          <button id="asc-desc"  @click="sortByDate=='asc'?sortDesc('date'):sortAsc('date')">Sort By Date</button>
        </div>
        <h1>Star Wars</h1>
        <div>
          <button id="asc-desc" @click="sortByEpisode=='asc'?sortDesc('episode'):sortAsc('episode')">Sort By Episode</button>
        </div>
      </div>
			<film-card v-for="film in filmsList" :key="film.episode_id" :film="film"></film-card>

		</div>
	</div>
</template>

<script>
	import FilmCard from '../components/FilmCard.vue'
	import swapi from '../service/api.js';
	export default {
    name: 'HomePage',
    components: {
    FilmCard
  },
    data() {
        return {
          filmsList:[],
          film: Object,
          sortByDate: undefined,
          sortByEpisode: undefined,
          hover:false

        }
    },
    mounted(){
      this.getFilms();
    },
    methods: {
      getFilms(){
        swapi.films.list().then(response => {
          this.filmsList = response.results;
          console.log("response.results", response.results);
          }
        );
      },
      sortAsc(sortTo){
        if(sortTo=='date'){
          this.sortByDate = 'asc';
          this.filmsList.sort(function(a, b) {
            return new Date(b.release_date) - new Date(a.release_date);
          });
        }
        else{
          this.sortByEpisode = 'asc';
          this.filmsList.sort(function(a, b) {
          return  b.episode_id -  a.episode_id;
          });
        }
      },
      sortDesc(sortTo){
        if(sortTo=='date'){
          this.sortByDate = 'desc';
          this.filmsList.sort(function(a, b) {
            return new Date(a.release_date) - new Date(b.release_date);
          });
        }else{
          this.sortByEpisode = 'desc';
          this.filmsList.sort(function(a, b) {
            return a.episode_id - b.episode_id;
          });
        }
      }

    }
}
</script>

<style lang="scss" scoped>
	.home-page {
    background-image: url("../assets/img/by.png");
		.grid {
			display: grid;
			grid-template-columns: 1rem ;
			grid-gap: 8rem;
      .sort-buttons{
        text-align: center;
        width: 97vw;
        padding-top: .5rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding-left: 1rem;
        h1{
           font-family: 'Star Jedi', arial;
           font-size: 7vw;
        }
        #asc-desc:hover {
          letter-spacing: 0.8em;
          background-color: #89c750;
        }

        #asc-desc {
          color: white;
        }
        button {
          font-weight: bold;
          width: 8.5rem;
          cursor: pointer;
          height: 4em;
          padding: 1.5em auto;
          background-color: #63e278;
          border: none;
          border-radius: 20px;
          text-transform: uppercase;
          transition: all 0.8s cubic-bezier(.4,0,.2,1);
        }
      }
		}
	}
</style>
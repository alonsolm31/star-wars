<template>
	<div class="film-card">
      <section class="bg">
        <div @click="goToDetail(film.url.replace(/\D/g, ''))"  class="blog-card">
          <img class="film-img" :src="require(`../assets/img/${film.episode_id}.jpeg`)"/>
          <div class="text-overlay">
            <h2 >{{film.title}}</h2>
            <p>Release date: {{film.release_date}}</p>
            <p>Episode: {{film.episode_id}}</p>
            <p>Director: {{film.director}}</p>
          </div>
        </div>
        <div class="credit">Producer <a class="creator-link"><p>{{film.producer}}</p></a></div>
      </section>
	</div>
</template>

<script>
	export default {
    name: 'FilmCard',
    props: {
        film: Object
    },
    data() {
        return {
          films:[]
        }
    },
    mounted(){
    },
    methods: {
    goToDetail(filmId){
        this.$router.push({name: 'film', params: {id:filmId }});
      }
    }
}
</script>

<style lang="scss" scoped>
	.film-card {
    opacity: 0.9;
    .bg {
      width: 97vw;
      height: 100vh;
      .img{
              width: 100vw;
      height: 100vh;
      }
    }
    .title {
      color: rgba(#fff, 0.85);
      font-family: 'Raleway','Lato','Helvetica Neue', Arial, sans-serif;
      font-size: 12vw;
      font-weight: 800;
      text-shadow: 0 5px 9px rgba(#000, 0.8);
      margin: auto;
      margin-top: 0;
      padding-top: 7vh;
    }

    .blog-card {
      display: block;
      position: relative;
      top: 6vw;
      width: 400px;
      height: 450px;
      margin: auto;
      box-shadow: 0 2px 10px rgba(#000, 0.85);
      transition: all 450ms ease-out 0s;
      overflow: hidden;
      .film-img {
        position: absolute;
        min-width: 100%;
        min-height: 100%;
        height: 100%;
        top: -9999px;
        left: -9999px;
        right: -9999px;
        bottom: -9999px;
        margin: auto;
        overflow: hidden;
      }
      &:hover {
        box-shadow: 0 2px 35px rgba(#000, 0.85);
        .text-overlay {
          background: rgba(#fff, 0.8);
          height: 50%;
          top: 50%;
          transition: all 450ms ease-in-out 0s;
        }
        p {
          transition: all 350ms ease-in-out 0s;
          a {
            visibility: visible;
          }
        }
      }
    }

    .text-overlay {
      position: relative;
      background: rgba(#fff, 0.6);
      width: 100%;
      height: 40%;
      top: 60%;
      box-shadow: 0 -2px 12px rgba(#000, 0.3);
      padding: 10px 12px;
      overflow: hidden;
      transition: all 450ms ease-in-out 0s;
      cursor: pointer;
      h2 {
        font-weight: bold;
        font-size: 1.9rem;
        color: rgba(#000, 0.85);
        letter-spacing: 0.0225em;
        width: auto;
        margin: 0;
      }
      p {
        font-size: 1.3rem;
        color: #7a5d0d;
        width: 380px;
        height: 38px;
        margin: 8px 0;
        line-height: 1.25;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      a {
        color: #378AEE;
        text-decoration: none;
        transition: all 350ms linear;
        visibility: hidden;
        &:hover {
          color: #449CC5;
          border-bottom: 1px dotted #47A8F2;
        }
      }
    }

    .credit {
      position: relative;
      color: rgba(#fff, 0.85);
      font-family: "Lato", 'Helvetica Neue', Arial, sans-serif;
      font-size: 1.5em;
      font-weight: 300;
      text-align: center;
      bottom: -15vh;
      .creator-link {
        color: rgba(#fff, 0.95);
        font-family: 'Kaushan Script', 'Lato','Helvetica Neue',sans-serif;
        font-size: 1.05em;
        font-weight: 600;
        letter-spacing: 0.5px;
        text-decoration: none;
        transition: all 350ms linear;
        &:hover {
          color: #44BCC5;
          text-shadow: 0 1px 3px rgba(#000, 0.6);
          transition: all 350ms linear;
        }
      }
    }

  }
</style>
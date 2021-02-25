<template>
	<div id="app">
    <div class="topnav">
      <a href="#home" :class="{active: $route.name == 'home'}"><router-link :to="{name: 'home'}">Home</router-link></a>
      <a  :class="{active: $route.name == 'film'}" >Film</a>
      <a  :class="{active: $route.name == 'character'}" >Character</a>
    </div>
	<router-view />
	</div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
    }
  },
   mounted() {
  },
  methods:{
  }
}
</script>

<style>
  *{
    margin: 0px;
    padding: 0px;
  }
  .topnav {
    text-align: center;
    z-index: 999;
    overflow: hidden;
    background-color: rgb(247, 203, 11);
    opacity: 0.5;
  }

  .topnav a {
    cursor: pointer;
    float: center;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  .topnav a:hover {
    background-color: #ddd;
    color: black;
  }

  .topnav a.active {
    background-color: rgb(170, 140, 5);;
    color: white;
  }
	#app {
    background-image: url("./assets/img/by.png");
		font-family: 'Lato','Helvetica Neue', Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
</style>
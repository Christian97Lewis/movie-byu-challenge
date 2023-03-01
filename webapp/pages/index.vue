<template>
  <div class="main-page-container">
    <div class="wrapper">
      <h1>Search by movie title or keyword for more information!</h1>
      <div class="form">
        <input v-model="searchTerm" placeholder="Search using title or keyword..." type="text" />
        <button @click="searchMovies(searchTerm)">Search</button>  
      </div>
    </div>
    <div class="movie-list" v-for="movie in movies" :key="movie.movie_id">
      <div class="column">
        <img :src="movie.poster_image_url">
      </div>
      <div class="column">
        <div class="row">
          <p> Movie Title: {{movie.title}}</p>
        </div>
        <div class="row">
          <p> Popularity: {{movie.popularity_summary}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  body, html {
    padding: 0;
    margin: 0;
    width: 100%;
    min-height: 100vh;
  }
  body {
    background-color: rgb(236, 236, 236);
  }
  .main-page-container {
    padding-top: 50px;
    text-align: center;
    min-height: 100%; 
  }
  .form {
    padding: 1rem;
    display: flex; 
    flex-direction: row;
    padding-left: 100px;
    padding-right: 100px;
  }
  .card-list {
    justify-content: center;
    text-align: center;
  }
  p {
    font-family: Arial, Helvetica, sans-serif;
  }
  input {
    flex-grow: 2;
    width: 200px;
    float: left;
    border: none;
    line-height: 3rem;
    padding: 0 1rem;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid grey;
  }
  .movie-list {
    margin: 1rem;
    padding: 1rem;
    display: flex; 
    flex-direction: row;
    background-color: white;
    border-radius: 10px;
  }
  .row {
    flex-grow: 1;
    text-align: left;
  }
  .column {
    flex-grow: 1;
  }
  .wrapper {
    max-width: 64rem;
    margin: auto;
  }
  img {
    width: 200px;
    height: 100%;
  }
  button {
    flex-grow: 1;
    background: #576bff;
    line-height: 3rem;
    color: #FFF;
    border: none;
    border-radius: 5px;
    margin-left: 10px;
    padding: 0 3rem;
  }
  h1 {
    font-family: Arial, Helvetica, sans-serif;
  }
</style>

<script>
import axios from 'axios';
export default {
  name: 'IndexPage',
  data() {
    return {
      searchTerm: "",
      movies: []
    }
  },
  methods: {
    async searchMovies(searchTerm) {
      try {
        let response = await axios.get("//localhost:3030/movies?search=" + searchTerm);
        this.movies = response.data;
        console.log(this.movies);
        return true;
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

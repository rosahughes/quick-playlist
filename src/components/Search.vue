<template>
  <div class="hello">
    
  
    <h1>Quick Playlist</h1>

    <hr>

    <p>Generate a random playlist by entering a keyword:</p>
    
    <form v-on:submit.prevent="Search">
      <input type="text" v-model="term" placeholder="Keyword"><button type="submit">Submit</button>
    </form>
    
    <div v-if="results" class="results">
      <ul id="results">
        <li v-for="result in results">
          <a target="_blank" v-bind:href="result.trackViewUrl">{{ result.trackName }}</a>, by artist <a target="_blank" v-bind:href="result.artistViewUrl">{{ result.artistName }}</a>
        </li>
      </ul>
    </div>

    <ul v-else-if="errors.length > 0" class="errors">
      <li v-for="error in errors">
        {{ error.message }}
      </li>
    </ul>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Search',
  data () {
    return {
      prediction: null,
      errors: [],
      results: [],
      term: ''
    }
  },
  methods: {
    Search: function() {
      axios.get("https://itunes.apple.com/search", {
      params: { term: this.term, kind:"song", entity:"song", limit:20 }
      })
      .then( response => {
      this.results = response.data.results;
      })
      .catch( error => {
      this.errors.push(error);
      }); 
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

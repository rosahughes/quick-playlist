<template>
  <div class="hello">
    
    <ul class="nav">
      <li>
        <router-link-active v-bind:to="{name:'Search'}">Search</router-link-active>
      </li>
      <li>
        <router-link v-bind:to="{name:'Results'}">Results</router-link>
      </li>
    </ul>
    
    <h1>QuickPlaylist: for an instant set of tunes</h1>
    <h3>Generate a random playlist by entering a keyword:</h3>
    
    <form v-on:submit.prevent="Search">
      <input type="text" placeholder="Keyword"><button type="submit">Submit</button>
    </form>
    
    <div v-if="results" class="results">
      <router-link v-bind:to="{ name: 'Results' }">{{ results.answer }}</router-link>
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
    }
  },
  methods: {
    Search: function() {
      axios.get("https://itunes.apple.com/search", {
        params: { term: this.artist}
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

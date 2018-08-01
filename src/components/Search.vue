<template>
  <div class="hello">
    
    <ul class="nav">
      <li>
        <router-link v-bind:to="{name:'Search'}">Search</router-link>
      </li>
      <li>
        <router-link v-bind:to="{name:'Results'}">Results</router-link>
      </li>
    </ul>
    
    <h1>QuickPlaylist: for an instant set of tunes</h1>
    <h3>Generate a random playlist by entering a keyword:</h3>
    
    <form v-on:submit.prevent="Search">
      <input type="text" v-model="term" placeholder="Keyword"><button type="submit">Submit</button>
    </form>
    
    <div v-if="results" class="results">
     <!--for later <router-link v-bind:to="{ name: 'Results' }">{{ results.answer }}</router-link> -->
      <ul id="results">
        <li v-for="result in results">
          {{ result.trackName }}
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
      // TODO: check cache for term from result, if found assign to results, otherwise run axios and cache it

      // axios.get("https://itunes.apple.com/search", {
      //   params: { term: this.term}
      // })
      // .then( response => {
      //   this.results = response.data.results;
      // })
      // .catch( error => {
      //   this.errors.push(error);
      // }); 
      let term=this.term;
      let self=this;
    $.ajax({
    url: "https://itunes.apple.com/search",
    dataType: "jsonp",
    data: {
      term: term, limit:20
     },
     error: function(jqXHR, textStatus, message) {
      console.log(message);
     },
     success: function(data, textStatus, jqXHR) {
     console.log(data);
     self.results = data.results;
      }
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
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

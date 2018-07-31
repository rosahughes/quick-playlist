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
    <h1>{{ msg }}</h1>
    <h3>Generate a random playlist by entering a keyword:</h3>
    <input type="text" placeholder="keyword">
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      msg: 'QuickPlaylist: for an instant set of tunes'
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

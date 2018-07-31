<template>
  <div class="component">
    <ul class="nav">
      <li>
        <router-link v-bind:to="{name:'Search'}">Search</router-link>
      </li>
      <li>
        <router-link-active v-bind:to="{name:'Results'}">Results</router-link-active>
      </li>
    </ul>
    <h2>Playlist for keyword {{ message }}</h2>
    <ol>
      <li>placeholder</li>
      <li>placeholder</li>
      <li>placeholder</li>
      <li>placeholder</li>
      <li>placeholder</li>
      <li>placeholder</li>
      <li>placeholder</li>
      <li>placeholder</li>
      <li>placeholder</li>
      <li>placeholder</li>
    </ol>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: 'term'
      }
    }
  }
</script>

<style scoped>
  .component {
    min-height: 400px;
  }
  ul.nav {
  list-style-type: none;
  display: inline-block;
  padding: 0;
  }
  li {
  margin: 0 10px;
  }
</style>
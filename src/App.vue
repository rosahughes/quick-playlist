<template>
  <div id="app">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
           <li class="nav-item active">
            <router-link class="nav-link" v-bind:to="{name:'Search'}">Quick Playlist Search</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" v-bind:to="{name:'About'}">About the App</router-link>
          </li>
          </ul>
        </div>
      </nav>
    <img src="./assets/music.png" alt="whimsical music notes">
    <router-view/>
    </div>
  </div>
</template>

<style>
img {
  padding: 30px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>

<script>
export default {
  name: 'App'
}
</script>



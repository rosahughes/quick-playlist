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
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: 'This component works.'
      }
    }
  }
</script>

<style scoped>
  .component {
    background: #e8e8e8;
    min-height: 400px;
  }
</style>
<template>
<div>
  <h1>I love {{food}}</h1>
  <button v-on:click.prevent='changeFood'>Change food</button>
  <h2>My car is a {{car}}</h2>
  <color v-bind:key='color' v-for='color in colors' v-bind:color='color'></color>
</div>
</template>

<script>
import Color from './Color.vue'

export default {
  props: ['car'],
  components: {
   Color
  },
  data: function() {
    return {
      food: 'Pizza',
      colors: ['red', 'blue', 'green', 'yellow']
    }
  },
  methods: {
    changeFood: function(){
      this.food = 'Ice Cream'
    }
  }
}
</script>

<style>
h1 {
  color: green;
}
</style>

<template>
<div class='color-list'>
  <p>The color is {{color}}</p>
</div>
</template>

<script>
export default {
  name: 'color',
  props: ['color'],
  data: function () {
    return {
      // Could put stuff here
    }
  }
}
</script>

<style>
/* Notice that this style is overridden by the styles in index.html. */
p {
  border: solid green 5px;
}
</style>

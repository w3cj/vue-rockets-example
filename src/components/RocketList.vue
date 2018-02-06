<template lang="html">
  <div>
    <h3>Rocket List</h3>
    <div class="row">
      <Rocket
        v-for="rocket in rockets"
        :key="rocket.name"
        :data="rocket"
        :addToFavorites="addToFavorites"></Rocket>
    </div>
  </div>
</template>

<script>
import Rocket from '@/components/Rocket';

export default {
  props: ['rockets', 'addToFavorites'],
  components: {
    Rocket
  }
};
</script>

<style lang="css">
</style>

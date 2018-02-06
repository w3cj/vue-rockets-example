<template lang="html">
  <div class="col-sm-6 col-md-4">
      <div class="thumbnail">
        <img :src="data.image" :alt="data.name">
        <div class="caption">
          <h3>{{data.name}}</h3>
          <p>{{data.description}}</p>
          <small>{{data.country}}</small>
          <p>
            <a
              href="#"
              class="btn btn-primary"
              role="button"
              @click="addToFavorites(data)">
              Add to Favorites
            </a>
          </p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['data', 'addToFavorites']
};
</script>

<style lang="css">
</style>

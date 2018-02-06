<template lang="html">
  <form class="form" @submit.prevent="onAddRocket()">
    <div class="form-group">
      <label for="name">Name</label>
      <input v-model="rocket.name" type="text" class="form-control" placeholder="">
    </div>
    <div class="form-group">
      <label for="country">Country</label>
      <input v-model="rocket.country" type="text" class="form-control" id="" placeholder="">
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        v-model="rocket.description"
        type="text"
        class="form-control"
        id="" placeholder=""></textarea>
    </div>
    <div class="form-group">
      <label for="image">Image</label>
      <input v-model="rocket.image" type="text" class="form-control" id="" placeholder="">
    </div>
    <button type="submit" class="btn btn-success">
      Add Rocket
    </button>
  </form>
</template>

<script>
export default {
  props: ['addRocket'],
  data() {
    return {
      rocket: {
        name: '',
        country: '',
        description: '',
        image: ''
      }
    };
  },
  methods: {
    onAddRocket() {
      this.addRocket(Object.assign({}, this.rocket));
      this.rocket = {
        name: '',
        country: '',
        description: '',
        image: ''
      };
    }
  }
};
</script>

<style lang="css">
</style>

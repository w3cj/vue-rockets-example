<template lang="html">
  <div>
    <h3>Cool Rockets</h3>
    <NewRocketForm
      :addRocket="addRocket">
    </NewRocketForm>
    <RocketList
      :addToFavorites="addToFavorites"
      :rockets="sortedRockets">
    </RocketList>
    <h3>Favorites</h3>
    <RocketList
      :addToFavorites="addToFavorites"
      :rockets="favoriteRockets">
    </RocketList>
  </div>
</template>

<script>
import RocketList from '@/components/RocketList';
import NewRocketForm from '@/components/NewRocketForm';

export default {
  components: {
    RocketList,
    NewRocketForm
  },
  data() {
    return {
      rockets: [],
      favoriteRockets: []
    };
  },
  mounted() {
    this.load();
  },
  computed: {
    sortedRockets() {
      return this.rockets.slice().sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
    }
  },
  methods: {
    load() {
      fetch('https://api.jsonbin.io/b/5a7a1d249a230212562a6f8b')
        .then(res => res.json())
        .then(rockets => this.rockets = rockets);
    },
    addRocket(rocket) {
      this.rockets.push(rocket);
    },
    addToFavorites(rocket) {
      this.favoriteRockets.push(rocket);
    }
  }
};
</script>

<style lang="css">
</style>

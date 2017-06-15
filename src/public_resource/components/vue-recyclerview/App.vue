<style>
.recyclerview-container {
  height: calc(100vh - 50px - 30px);
  padding-bottom: 20px;
}
.recyclerview-container p{
  color: #333
}
</style>

<template>
  <div id="app">
    <RecyclerView 
      :prerender="30"
      :fetch="MiFetch" 
      :item="MiItem" 
      :tombstone="MiTomstone"
    ></RecyclerView>
  </div>
</template>

<script>
import MiItem from './Item.vue'
import MiTomstone from './Tombstone.vue'
import MiFetch from './mi-fetch.js'

export default {
  name: 'app',
  data () {
    return {
      MiFetch,
      MiItem,
      MiTomstone
    }
  }
}
</script>
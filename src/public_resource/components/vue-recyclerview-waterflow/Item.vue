<style>
.simple-item {
    position: relative;
    width: 33.33%;
    min-height: 150px;
    background: #000;
    border: 1px solid #000;
    box-sizing: border-box;
    will-change: transform;
}
.simple-item-image {
    width: 100%;
    min-height: 150px;
    vertical-align: bottom;
}
</style>
<template>
    <div class="simple-item" @click="add">
        <img class="simple-item-image lazy" :src="data.img_url">
    </div>
</template>

<script>
export default {
  props: {
    data: Object
  },
  methods: {
    add (e) {
      e.preventDefault()
      // console.log(this.data.name)
    }
  }
}
</script>
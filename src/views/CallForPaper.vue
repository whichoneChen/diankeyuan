<template>
  <div style="width: 100%">

    <div class="back-img">
      <img :src="require('assets/images/callfor/logo.png')" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "CallForPaper"
}
</script>

<style scoped>
.back-img{
  background-image: url("../assets/images/callfor/bgc1.png");
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
}
</style>

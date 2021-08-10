<template>
  <div>
    <div class="back-img">
      <img :src="require('assets/images/programme/logo.png')" alt="">
    </div>

    <div class="comming-soon">
      Comming Soon...
    </div>
  </div>

</template>

<script>
export default {
  name: "Programme"
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

.comming-soon{
  height: 200px;
  color: #666666;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>

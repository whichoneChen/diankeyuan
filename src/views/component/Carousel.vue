<template>
  <div style="width: 100%; position: relative">
    <div class="text-region" >
      <div class="t-greeting">SEE YOU IN NANJING/CHINA</div>
      <div class="t-date">NOVEMBER 25-2 7, 2021</div>
    </div>
    <a class="caro-arrow left-arrow" href="#" @click="prevItem"> &lt </a>
    <el-carousel
        indicator-position="inside"
        height="550px"
        arrow="never"
        :interval="5000"
        ref="mycarousel"
    >
      <el-carousel-item v-for="item in 3" :key="item">
        <img :src="require('assets/images/home/swiper'+ item + '.png')" alt="轮播图">
      </el-carousel-item>
    </el-carousel>
    <a class="caro-arrow right-arrow" href="#" @click="nextItem"> &gt </a>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  methods:{
    prevItem(){
      this.$refs.mycarousel.prev();
    },
    nextItem(){
      this.$refs.mycarousel.next();
    }
  }
}
</script>

<style scoped lang="scss">
@import "styles/swiper.scss";

</style>

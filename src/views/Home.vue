<template>
  <el-container>
    <el-header style="height: 167px">
      <div class="img-container">
        <img :src="require('assets/images/head1.png')" class="hl-img" alt="大会图标">
        <img src="~@/assets/images/head2.png" class="hr-img" alt="学会会标">
      </div>
    </el-header>

    <el-main>
      <Menu/>
      <div style="width: 100%; position: relative">
        <div class="text-region" >
          <div class="t-greeting">SEE YOU IN NANJING/CHINA</div>
          <div class="t-date">NOVEMBER 25-27, 2021</div>
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
            <img :src="require('assets/images/swiper'+ item + '.png')" alt="轮播图">
          </el-carousel-item>
        </el-carousel>
        <a class="caro-arrow right-arrow" href="#" @click="nextItem"> &gt </a>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import Header from "./component/Header";
import MainBody from "./component/MainBody";
import Menu from "./component/Menu";

export default {
  name: "Home",
  components:{
    Header,
    MainBody,
    Menu
  },
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
@import "styles/header.scss";

.el-main{
  width: 100%;
  padding: 0;
}

</style>

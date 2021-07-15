<template>
  <el-main>
    <Menu/>
    <div style="width: 100%;position: relative">
        <div class="left-arrow"> &lt </div>
        <el-carousel
            indicator-position="inside"
            height="550px"
            arrow="never"
        >
          <el-carousel-item v-for="item in 3" :key="item">
            <img :src="require('assets/images/swiper'+ item + '.png')" alt="轮播图">
          </el-carousel-item>
        </el-carousel>
        <div class="right-arrow"> &gt </div>
    </div>
  </el-main>
</template>

<script>
import Menu from "components/Menu";

export default {
  name: "MainBody",
  components:{
    Menu
  }
}
</script>

<style scoped>
.el-main{
  width: 100%;
  padding: 0;
}

.left-arrow{
  position: absolute;
  left: 187px;
  font-size: 20px;
  color: #fff;
}

</style>

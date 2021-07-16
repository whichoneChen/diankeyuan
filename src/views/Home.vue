<template>
  <el-container>
    <el-header style="height: 167px">
      <div class="img-container">
        <img :src="require('assets/images/head1.png')" class="hl-img" alt="大会图标">
        <img src="~@/assets/images/head2.png" class="hr-img" alt="学会会标">
      </div>
    </el-header>

    <el-main>

      <Menu/>  <!-- 下拉菜单     -->

      <Carousel/>  <!-- 轮播图-->

      <NameCard/>

      <ConferenceInfo/>

      <Support/>

      <Footer/>

    </el-main>
  </el-container>
</template>

<script>
import Header from "./component/Header";
import MainBody from "./component/MainBody";
import Menu from "./component/Menu";
import Carousel from "./component/Carousel";
import NameCard from "./component/NameCard";
import ConferenceInfo from "./component/ConferenceInfo";
import Support from "./component/Support";
import Footer from "./component/Footer";


export default {
  name: "Home",
  components:{
    NameCard,
    Header,
    MainBody,
    Menu,
    Carousel,
    ConferenceInfo,
    Support,
    Footer,
  },

}
</script>

<style scoped lang="scss">
@import "styles/header.scss";

.el-main{
  width: 100%;
  padding: 0;
}

</style>

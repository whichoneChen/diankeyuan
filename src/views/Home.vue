<template>
  <div class="home-main">
    <Carousel/>  <!-- 轮播图-->

    <NameCard/>

    <ConferenceInfo/>

    <Support/>
  </div>
</template>

<script>
import Header from "../components/Header";
import MainBody from "./component/MainBody";
import Menu from "../components/Menu";
import Carousel from "./component/Carousel";
import NameCard from "./component/NameCard";
import ConferenceInfo from "./component/ConferenceInfo";
import Support from "./component/Support";
import Footer from "../components/Footer";


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

.home-main{
  width: 100%;
  padding: 0;
  overflow: hidden;
}

</style>

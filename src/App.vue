<template>
  <div id="app">
    <el-container>
      <el-header style="height: 219px; padding: 0">
        <div class="img-container">
          <img :src="require('assets/images/head1.png')" class="hl-img" alt="大会图标">
          <img src="~@/assets/images/head2.png" class="hr-img" alt="学会会标">
        </div>
        <Menu/>  <!-- 下拉菜单     -->
      </el-header>


      <el-main>
        <router-link to="/" />
        <router-view/>
      </el-main>


      <Footer/>
    </el-container>
  </div>
</template>

<script>
import Home from "./views/Home";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

export default{
  name:'App',
  components:{
    Home,
    Menu,
    Footer
  }
}

</script>

<style lang="scss">
@import "styles/header.scss";

  body{
    //width: 1920px;
    margin: 0;
    padding: 0;
    #app{
      //width: 1920px;
    }
    .el-main{
      width: 100%;
      padding: 0;
    }
  }
</style>

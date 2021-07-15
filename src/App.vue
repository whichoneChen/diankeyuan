<template>
  <div id="app">
    <Header/>
    <MainBody/>
  </div>
</template>

<script>
import Header from "./views/component/Header";
import MainBody from "./views/component/MainBody";
export default{
  name:'App',
  components:{
    Header,
    Home,
    MainBody
  }
}

</script>

<style lang="scss">
  body{
    //width: 1920px;
    margin: 0;
    padding: 0;
    #app{
      width: 1920px;
    }
  }
</style>

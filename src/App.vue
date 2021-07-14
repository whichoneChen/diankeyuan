<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from "views/Home";

export default{
  name:'App',
  components:{
    Home,
  }
}

</script>

<style lang="scss">
  body{
    width: 1920px;

    #app{
      width: 100%;
    }
  }
</style>

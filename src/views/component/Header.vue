<template>
  <el-header style="height: 167px">
    <div class="img-container">
      <img :src="require('assets/images/head1.png')" class="hl-img" alt="大会图标">
      <img src="~@/assets/images/head2.png" class="hr-img" alt="学会会标">
    </div>
  </el-header>
</template>

<script>

export default {
  name: "Header",
  components:{
  }
}
</script>

<style scoped>
.el-header{
  /*header自带内联高度，只能在内联样式里覆盖，改这里没用*/
  height: 167px;
  width: 100%;
  padding: 40px 291px 11px 357px;
}

.img-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hl-img{
  height: 108px;
  width: 454px;
}

.hr-img{
  height: 76px;
  width: 345px;
}
</style>

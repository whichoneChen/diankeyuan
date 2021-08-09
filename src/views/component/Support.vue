<template>
  <div>
    <el-row>
      <el-col :md="{span:8, offset:3}">
        <div class="support-title">
          <span>HOST</span>
        </div>
        <div class="support-img">
          <img :src="require('assets/images/home/host.png')" alt="host">
        </div>

        <div class="support-title">
          <span>SUPPOTERS</span>
        </div>
        <div class="support-img">
          <img :src="require('assets/images/home/supporter.png')" alt="supporters">
        </div>
      </el-col>

      <el-col :md="{span:10, offset:1}">
        <div class="support-title">
          <span>MEDIA SUPPORTERS</span>
        </div>
        <div class="support-img">
          <img :src="require('assets/images/home/media.png')" alt="media supporters">
        </div>
      </el-col>
    </el-row>
  </div>

</template>

<script>
export default {
  name: "Support"
}
</script>

<style scoped lang="scss">
.support-title{
  color: #fff;
  //width: ;
  font-size: 18px;
  font-family: FZZDHJW;
  span{
    background-color: #007EAB;
    display: inline-block;
    padding: 3px 10px;
  }
}

.support-img{
  background-color: #EEEEEE;
  padding: 10px 20px;
  margin-bottom: 30px;
}

</style>

<template>
    <div class="menu-container">
      <el-menu
          mode="horizontal"
          @select="handleSelect"
          text-color="#fff"
          background-color="#11A3CA"
      >
        <el-menu-item index="1">Home</el-menu-item>

        <el-submenu index="2">
          <template slot="title">CALL FOR PAPERS</template>
          <el-menu-item index="2-1">选项2-1</el-menu-item>
          <el-menu-item index="2-2">选项2-2</el-menu-item>
          <el-menu-item index="2-3">选项2-3</el-menu-item>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">PROGRAMME</template>
          <el-menu-item index="3-1">选项3-1</el-menu-item>
          <el-menu-item index="3-2">选项3-2</el-menu-item>
          <el-menu-item index="3-3">选项3-3</el-menu-item>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title">KEYNOTE SPEAKERS</template>
          <el-menu-item index="4-1">KEYNOTE SPEAKERS</el-menu-item>
        </el-submenu>

        <el-submenu index="5">
          <template slot="title">COMMITTEES</template>
          <el-menu-item index="5-1">选项5-1</el-menu-item>
          <el-menu-item index="5-2">选项5-2</el-menu-item>
          <el-menu-item index="5-3">选项5-3</el-menu-item>
        </el-submenu>

        <el-submenu index="6">
          <template slot="title">REGISTRATION</template>
          <el-menu-item index="6-1">选项6-1</el-menu-item>
          <el-menu-item index="6-2">选项6-2</el-menu-item>
          <el-menu-item index="6-3">选项6-3</el-menu-item>
        </el-submenu>

        <el-submenu index="7">
          <template slot="title">HOTEL/NANJING</template>
          <el-menu-item index="7-1">CONFERENCE VENUE</el-menu-item>
          <el-menu-item index="7-2">ACCOMMADATION</el-menu-item>
          <el-menu-item index="7-3">CONTACT INFORMATION</el-menu-item>
        </el-submenu>

      </el-menu>
    </div>
</template>

<script>
export default {
  name: "Menu",
  methods:{
    handleSelect(key,item){
      console.log(key)
      const keyDict = {
        '1':this.getHome,
        '4-1':this.getKeynoteSpeakers,
        '7-1': this.getVenue,

      }
      if(Object.keys(keyDict).includes(key)){
        keyDict[key]();
      }
    },
    getVenue(){
      this.$router.push('/venue');
    },
    getKeynoteSpeakers(){
      this.$router.push('/keynote')
    },
    getHome(){
      this.$router.push('/')
    }
  },
  mounted(){
    //设置箭头颜色，样式表不起作用
    document.getElementsByTagName('i').forEach((item)=>{
      item.setAttribute('style',"color: #fff")
    })
  },
}
</script>

<style scoped lang="scss">
.menu-container{
  width: 1920px;
  background-color:#11A3CA;
}

.el-menu{
  padding: 5px 351px 5px 362px;
  font-size: 16px;

  #more-icon{
    color: #484AB5;
  }
}

/*.el-submenu>.el-submenu__title .el-submenu__icon-arrow i{*/
/*  color: #fff;*/
/*}*/



</style>

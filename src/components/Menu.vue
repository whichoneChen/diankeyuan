<template>
    <div class="menu-container">
      <el-menu
          mode="horizontal"
          @select="handleSelect"
          text-color="#fff"
          background-color="#11A3CA"
      >
        <el-menu-item index="1">HOME</el-menu-item>

        <el-menu-item index="2">CALL FOR PAPERS</el-menu-item>
<!--        <el-submenu index="2">-->
<!--          <template slot="title">CALL FOR PAPERS</template>-->
<!--          <el-menu-item index="2-1">CALL FOR PAPERS</el-menu-item>-->
<!--        </el-submenu>-->


        <el-menu-item index="3">PROGRAMME</el-menu-item>
<!--        <el-submenu index="3">-->
<!--          <template slot="title">PROGRAMME</template>-->
<!--          <el-menu-item index="3-1">选项3-1</el-menu-item>-->
<!--          <el-menu-item index="3-2">选项3-2</el-menu-item>-->
<!--          <el-menu-item index="3-3">选项3-3</el-menu-item>-->
<!--        </el-submenu>-->

        <el-menu-item index="4">KEYNOTE SPEAKERS</el-menu-item>

<!--        <el-submenu index="4">-->
<!--          <template slot="title">KEYNOTE SPEAKERS</template>-->
<!--          <el-menu-item index="4-1">KEYNOTE SPEAKERS</el-menu-item>-->
<!--        </el-submenu>-->

        <el-submenu index="5">
          <template slot="title">COMMITTEES</template>
          <el-menu-item index="5-1">STEERING COMMITTEE</el-menu-item>
          <el-menu-item index="5-2">TECHNICAL COMMITTEE</el-menu-item>
          <el-menu-item index="5-3">ORGANIZING COMMITTEE</el-menu-item>
        </el-submenu>


        <el-menu-item index="6">REGISTRATION</el-menu-item>
<!--        <el-submenu index="6">-->
<!--          <template slot="title">REGISTRATION</template>-->
<!--          <el-menu-item index="6-1">选项6-1</el-menu-item>-->
<!--          <el-menu-item index="6-2">选项6-2</el-menu-item>-->
<!--          <el-menu-item index="6-3">选项6-3</el-menu-item>-->
<!--        </el-submenu>-->

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
      const keyDict = {
        '1': this.getHome,
        '2': this.callForPapers,
        '3': this.programme,
        '4':this.getKeynoteSpeakers,
        '5-1':this.steering,
        '5-2':this.technical,
        '5-3':this.organizing,
        '6':this.registration,
        '7-1': this.getVenue,
        '7-2': this.accomodation,
        '7-3': this.contact,

      }
      if(Object.keys(keyDict).includes(key)){
        keyDict[key]();
      }
    },
    getVenue(){
      this.$router.push('/venue');
    },
    getKeynoteSpeakers(){
      this.$router.push('/keynote');
    },
    getHome(){
      this.$router.push('/');
    },
    callForPapers(){
      this.$router.push('/paper');
    },
    programme(){
      this.$router.push('/programme');
    },
    accomodation(){
      this.$router.push('/accomodation');
    },
    contact(){
      this.$router.push('/contact');
    },
    steering(){
      this.$router.push('/steeringCommittee')
    },
    technical(){
      this.$router.push('/technicalCommittee')
    },
    organizing(){
      this.$router.push('/organizingCommittee')
    },
    registration(){
      this.$router.push('./registration')
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
  //width: 1920px;
  background-color:#11A3CA;
  display: flex;
  justify-content: center;
  z-index: 1000;
}

.el-menu{
  //padding: 5px 0px 5px 0px;
  font-size: 16px;

  #more-icon{
    color: #484AB5;
  }
}

/*.el-submenu>.el-submenu__title .el-submenu__icon-arrow i{*/
/*  color: #fff;*/
/*}*/



</style>

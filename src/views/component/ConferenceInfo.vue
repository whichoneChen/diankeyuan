<template>
  <div class="confer-zone">
    <el-row :gutter="90">
      <el-col :span="12">
        <span class="text-box1">
          All accepted papers will be included in IEEE Xplore and indexed by EI Compendex.
        </span>
        <span class="text-title1">
          Conference Topics：
        </span>

        <span class="text-box2">
          The conference organizing committee invites
          contributions in all areas related to power
          and energy technologies, including (but not
          limited to) the following:
        </span>

        <img class="sub-img" :src="require('assets/images/submit.png')" alt="Submit Now" @click="submitNow"/>

        <div class="agenda-list">
          <ul>
            <li v-for="agenda in agendas">
              {{agenda.toUpperCase()}}
              <img :src="require('assets/images/triangle.png')" alt="">
            </li>
          </ul>
        </div>

      </el-col>

      <el-col :span="12">


      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "ConferenceInfo",
  methods:{
    submitNow(){
      console.log("Submit Now!");
    }
  },
  data(){
    return{
      agendas:[
          "1. New Energy Based Modern Power System",
          "2. Energy Efficiency & Low Carbon",
          "3. Internet + Intelligent Energy Consumption",
          "4. Electronic Power Grid Systems",
          "5. Transportation Electrification",
          "6. Emerging Technology Applications",
      ]
    }
  }
}
</script>

<style scoped lang="scss">

.confer-zone{
  //width: 100%;
  height: 920px;
  margin-top: 120px;
  margin-bottom: 156px;
  background-image: url("../../assets/images/bg1.png");
  padding: 0 360px;
}

.text-box1{
  display: inline-block;
  color: #fff;
  font-family: "PingFangSC";
  height: 58px;
  width: 532px;
  line-height: 36.8px;
  font-size: 22px;
  margin-top: 28px;
  font-weight: bold;
}

.text-title1{
  display: inline-block;
  font-family: "PingFangSC";
  font-size: 36.8px;
  line-height: 36.8px;
  color: #fff;
  margin-top: 48px;
  //font-weight: 800;
}

.text-box2{
  display: inline-block;
  background-color: #007EAB;
  padding: 23px 22px 30px 13px;
  color: #fff;
  font-family: "PingFangSC";
  line-height: 29.82px;
  font-size: 22px;
  margin-top: 15px;
  font-weight: 500;
  width: 487px;
}

.sub-img{
  cursor: pointer;
  display: inline-block;
  height: 64px;
  width: 303px;
  margin-top: 40px;
  margin-left: 7px;
}

.agenda-list{
  margin-top: 101px;
  margin-left: 2px;
  color: #fff;

  img{
    height: 14px;
    width: 24px;
  }

  ul{
    padding: 0;
    margin: 0;

    li{
      list-style: none;
      margin-bottom: 35px;
    }
  }


}

</style>

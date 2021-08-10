<template>
  <div style="width: 100%">

    <div class="back-img">
      <img :src="require('assets/images/callfor/logo.png')" alt="">
    </div>

    <div class="text-region">
      <el-row>
        <el-col :md="12" :sm="24">
          <div class="text-box">
            IEEE PES and CSEE (Chinese Society of Electrical Engineering) have reached an
            agreement on co-organizing the IEEE Sustainable Power and Energy Conference
            (iSPEC). Parallel with the IEEE PES General Meeting in North America every summer,
            iSPEC will be held every winter. The iSPEC 2021 will be held in November 25-27,
            2021 in Nanjing, China. The theme of the meeting is “Energy Transition for
            Carbon Neutrality.”
          </div>
        </el-col>

        <el-col :md="12" :sm="24">
          <div class="text-box">
            We warmly invite the scholars, professors, engineers and students in the field of
            power & energy to submit your research papers to iSPEC 2021. The iSPEC willb
            ring together practicing power engineers and academics from all over the world.
            The aim of the conference is to provide an international forum for experts to promote,
            share, and discuss various issues and developments in the field of power & energy.
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="submit-zone">
      <div class="submit-img">
        <img :src="require('assets/images/callfor/submit.png')" alt="">
      </div>
      <div class="submit-text">
        {{"All accepted papers will be included IN IEEE XPLORE and indexed by EI Compendex.".toUpperCase()}}
      </div>
      <div class="important-dates">
        <img :src="require('assets/images/callfor/dates.png')" alt="">
        <div> Full paper submission 1st Aug. 2021</div>
        <div>Notification of acceptance/ rejection 1st Sep. 2021</div>
        <div>Presentation submission 30 Sep. 2021</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "CallForPaper"
}
</script>

<style scoped lang="scss">
.back-img{
  background-image: url("../assets/images/callfor/bgc1.png");
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
}

.text-region{
  margin: 60px 100px;
}

.text-box{
  margin: 30px;
  font-size: 14px;
  color: #666666;
  line-height: 24px;
}

.submit-zone{
  background-image: url("../assets/images/callfor/bgc2.png");
  height: 510px;
  border-top: 1px solid white;

  &>*{
    margin: 50px ;
  }
}

.submit-img{
  display: flex;
  justify-content: center;
  margin: 30px 0;
}

.submit-text{
  text-align: center;
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 24px;
}

.important-dates{
  text-align: center;
  font-size: 36px;
  font-family: FZYDZHJW;
  font-weight: normal;
  color: #FFFFFF;
  line-height: 48px;

  img{
    display: inline-block;
    margin: 30px 0;
  }
}

</style>

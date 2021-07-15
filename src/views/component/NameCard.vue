<template>
  <div class="name-container">
    <div align="center">
      <img :src="require('@/assets/images/seeyou.png')" alt="">
    </div>

    <div>
      <div class="left-text name-text">
        IEEE PES and CSEE (Chinese Society of Electrical Engineering) have reached an
        agreement on co-organizing the IEEE Sustainable Power and Energy Conference
        (iSPEC). Parallel with the IEEE PES General Meeting in North America every
        summer, iSPEC will be held every winter. The iSPEC 2021 will be held in November
        25-27, 2021 in Nanjing, China. The theme of the meeting is “Energy Transition
        for Carbon Neutrality.”
      </div>

      <div class="right-text name-text">
        We warmly invite the scholars, professors, engineers and students in the field of
        power & energy to submit your research papers to iSPEC 2021. The iSPEC will
        bring together practicing power engineers and academics from all over the world.
        The aim of the conference is to provide an international forum for experts to promote
        , share, and discuss various issues and developments in the field of power & energy.
      </div>
    </div>

    <div class="name-list">
      <div v-for="(item,index) in nameList" class="profile">
        <div>
          <img :src="require('@/assets/images/avatar'+ (index +1) + '.png')" alt="avatar">
        </div>
        <div>{{item.name}}</div>
        <div>{{item.institution}}</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "NameCard",
  data(){
    return {
      nameList:[
        {
          name:'Dr. Tim Coombs',
          institution: '(University of Cambridge)'
        },
        {
          name:'Prof. Kang Li',
          institution: '(University of Leeds)'
        },        {
          name:'Prof. Jihong Wang',
          institution: '(University of Warwick)'
        },        {
          name:'Dr. David M. Laverty',
          institution: '(Queen’s University Belfast)'
        },        {
          name:'Professor Gu Wei',
          institution: '(Southeast University）'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .name-container{
    width: 100%;
    padding: 70px 0;
  }

  .name-text{
    line-height: 24px;
    font-family: "PingFangSC-Bold";
    font-size: 14px;
    padding: 50px 0 70px 0;
    height: 135px;
    display: inline-block;
    word-wrap: break-word;
    width: 570px;
    font-weight: bold;
    color: #666666;
  }

  .left-text{
    /*width: 556px;*/
    margin-left: 360px;
  }

  .right-text{
    /*width: 570px;*/
    margin-left: 70px;
  }

  .name-list{
    padding: 0 360px;
    display: flex;
    justify-content: space-around;
  }

  .profile{
    display: inline-block;
    height: 200px;
    text-align: center;
    font-family: "PingFangSC-Bold";
    font-size: 18px;
    line-height: 21.88px;

    &>div:first-child{
      margin-bottom: 31px;
    }
  }

</style>

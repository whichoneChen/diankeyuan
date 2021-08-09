<template>
  <div class="name-container">
    <div align="center">
      <img :src="require('@/assets/images/home/seeyou.png')" alt="">
    </div>

    <div>
      <el-row>
        <el-col :lg="12" :md="24" :sm="24">
          <div class="left-text name-text">
            <span>
              IEEE PES and CSEE (Chinese Society of Electrical Engineering) have reached an
              agreement on co-organizing the IEEE Sustainable Power and Energy Conference
              (iSPEC). Parallel with the IEEE PES General Meeting in North America every
              summer, iSPEC will be held every winter. The iSPEC 2021 will be held in November
              25-27, 2021 in Nanjing, China. The theme of the meeting is “Energy Transition
              for Carbon Neutrality.”
            </span>
          </div>
        </el-col>

        <el-col :lg="12" :md="24" :sm="24">
          <div class="right-text name-text">
            <span>
            We warmly invite the scholars, professors, engineers and students in the field of
            power & energy to submit your research papers to iSPEC 2021. The iSPEC will
            bring together practicing power engineers and academics from all over the world.
            The aim of the conference is to provide an international forum for experts to promote
            , share, and discuss various issues and developments in the field of power & energy.
            </span>
          </div>

        </el-col>
      </el-row>
    </div>

    <div class="name-list">
      <el-row>
        <el-col :md="8" :sm="12" v-for="(item,index) in nameList" class="profile">
          <div>
            <img :src="require('@/assets/images/home/'+item.avatar)" alt="avatar">
          </div>
          <div class="profile-name">{{item.name}}</div>
          <div>{{item.institution}}</div>
        </el-col>
      </el-row>
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
          name:'Shu Yinbiao',
          institution: '(Fellow of China Engineering Academy)',
          avatar:'1-1.png'
        },
        {
          name:'Zhou Xiaoxin',
          institution: '(Fellow of Chinese Academy of Sciences)',
          avatar:'1-2.png'
        },
        {
          name:'Guo Jianbo',
          institution: '(Fellow of China Engineering Academy)',
          avatar:'1-3.png'
        },
        {
          name:'Ding Yulong',
          institution: '(Fellow of Royal Academy of Engineering)',
          avatar:'1-4.png'
        },
        {
          name:'Mohammad Shahidehpour',
          institution: '(Fellow of American Academy of Engineering)',
          avatar:'1-5.png'
        },
        {
          name:'Goran',
          institution: '(Professor, Imperial College London)',
          avatar:'1-6.png'
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
    font-weight: bold;
    color: #666666;

    span{
      display: block;
      width: 70%;
      margin: 0 auto;

    }
  }

  .left-text{
    /*width: 556px;*/
    //margin-left: 360px;
  }

  .right-text{
    /*width: 570px;*/
    //margin-left: 70px;
  }

  .name-list{
    padding: 0 60px;
    //display: flex;
    //justify-content: space-around;
  }

  .profile{
    display: inline-block;
    height: 200px;
    text-align: center;
    font-family: "PingFangSC-Bold";
    font-size: 16px;
    line-height: 21.88px;
    margin: 30px 0;

    .profile-name{
      font-size: 20px;
      font-weight: bold;
    }
    //&>div:first-child{
    //  margin-bottom: 31px;
    //}
  }

</style>

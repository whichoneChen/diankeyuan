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

    <div class="contribution-area">

      <div class="digest">
        <div>
          The conference organizing committee invites contributions in all areas related to
        </div>
        <div>
          power and energy technologies, including (but not limited to) the following:
        </div>
      </div>

      <el-row class="area-card">
        <el-col v-for="area in areas" :md="12" :sm="24">
          <div class="area-title">{{area.title.toUpperCase()}}</div>
          <div v-for="item in area.items" class="area-item">
            {{item}}
          </div>
        </el-col>
      </el-row>

      <div class="area-notes">
        <div>Notes :</div>
        <div>The full paper temple is download <a href="#">here</a></div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "CallForPaper",
  data(){
    return{
      areas:[
        {
          title:'1. New Energy Based Modern Power System',
          items:[
              'Facilitating high penetration of renewables',
              'Integrating multiple energy systems',
              'Energy storage and its application',
              'System resiliency, economics and stability',
              'Energy market and ancillary services'
          ]
        },
        {
          title:'2. New Energy Based Modern Power System',
          items:[
            'Carbon peak and carbon neutrality',
            'Alternative fuel and energy source',
            'CO2 capture, conversion and utilization',
            'Efficiency improvement and CO2 reduction',
            'Carbon footprint, audit and transaction',
            'Low Carbon policy and planning'
          ]
        },
        {
          title:'3. Internet + Intelligent Energy Consumption',
          items:[
            'Potentiality of flexible resources',
            'Identification of customer behavior',
            'DER management and demand response',
            'Transaction of power consumption right',
            'Energy substitution and management',
          ]
        },
        {
          title:'4. Electronic Power Grid Systems',
          items:[
            'Modeling and simulations of electronic power grids',
            'Stability and reliability of electronic power grid systems',
            'Power generation/consumption equipment',
            'FACTS, HVDC and Smart Transformers',
          ]
        },
        {
          title:'5. Transportation Electrification',
          items:[
            'Electric machines and motor drives',
            'Smart grids interaction with automotive',
          'Design, management and optimization for powertrain',
          'Electric vehicle system architectures and control',
          'Electric aircraft, and marine propulsion system',
          'Onboard and wireless battery chargers',
          ]
        },
        {
          title:'6. Emerging Technology Applications',
          items:[
            'Machine learning and big data analysis',
            'Blockchain for distributed application and transaction',
          '5G network and communication',
          'loud computing and edge computing',
          'Internet of Things (IoT) integrated power systems',
          'Cyber Security Technology',
          ]
        },
      ]
    }
  }
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
}

.contribution-area{

  .digest{
    font-size: 16px;
    font-family: PingFang;
    font-weight: 400;
    color: #666666;
    line-height: 24px;
    text-align: center;

    margin: 60px 0;
  }

  .area-card{
    margin: 50px 150px;
    .area-title{
      font-size: 18px;
      font-family: FZZCHJW;
      font-weight: normal;
      line-height: 24px;
      margin: 10px 0;
    }

    .area-item{
      font-size: 14px;
      font-family: PingFang;
      font-weight: 400;
      line-height: 20px;
      margin: 3px;
    }

    &>*{
      padding: 10px 10px 10px 10px;
      height: 200px;
      background: #EEEEEE;
      color: #666666;


      &:nth-child(2),&:nth-child(3),&:nth-child(6){
        background: #11A3CA;
        color: #fff;
      }
    }


  }

  .area-notes{
    margin: 30px 150px;
    font-size: 24px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #999999;
    line-height: 24px;

    a{
      text-decoration: none;
      color: #11A3CA;
    }
  }
}

</style>

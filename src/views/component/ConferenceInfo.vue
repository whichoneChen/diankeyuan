<template>
  <div class="confer-zone">
    <el-row :gutter="90">
      <el-col :lg="12" :md="12" :sm="24">
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

        <img class="sub-img" :src="require('assets/images/home/submit.png')" alt="Submit Now" @click="submitNow"/>

        <div class="agenda-list">
          <ul>
            <li v-for="agenda in agendas">
              {{agenda.toUpperCase()}}
              <img :src="require('assets/images/home/triangle.png')" alt="">
            </li>
          </ul>
        </div>

      </el-col>

      <el-col :lg="12" :md="12" :sm="24" class="right-cards">
        <!--   日期面板     -->
        <Card class="time-card">
          <template #title>
            <span>
              {{"Important Dates".toUpperCase()}}
            </span>
          </template>

          <div class="card-date-list">
            <ul>
              <li v-for="item in dateList">
                <span class="date-item">{{item.date}}</span>
                <span class="date-agenda">{{item.agenda}}</span>
              </li>
            </ul>
          </div>
        </Card>
        <!--Tutorials && PANELS面板-->
        <Card>
          <template #title>
            <span>{{cardInfo1.title}}</span>
          </template>
          <ul class="card-panel">
            <li v-for="person in cardInfo1.persons">
              <img :src="require('assets/images/home/'+person.avatar)" alt="avatar">
              <span class="card-panel-description">{{person.description}}</span>
            </li>
          </ul>
        </Card>

        <Card class="last-card">
          <template #title>
            <span>{{cardInfo2.title}}</span>
          </template>
          <ul class="card-panel">
            <li v-for="person in cardInfo2.persons">
              <img :src="require('assets/images/home/'+person.avatar)" alt="avatar">
              <span class="card-panel-description">{{person.description}}</span>
            </li>
          </ul>
        </Card>


      </el-col>
    </el-row>
  </div>
</template>

<script>
import Card from "../../components/Card";
export default {
  name: "ConferenceInfo",
  components: {Card},
  methods:{
    submitNow(){
      window.location.href = "http://action.csee.org.cn:8080/ICEE/a/login?redLoginUrl=/a/paper/goPaper?activityId=243"
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
      ],
      dateList:[
        {
          date:'01 Jul. 2021',
          agenda:'Full paper submission'
        },
        {
          date:'01 Sep. 2021',
          agenda:'Notification of acceptance/rejection\n'
        },        {
          date:'03 Sep. 2021',
          agenda:'Presentation submission'
        },
      ],
      cardInfo1: {
          title:'IMPORTANT TUTORIALS',
          persons:[
            {
              avatar:'2-1.png',
              description:'•  Electronic Power Grid Systems'
            },
            {
              avatar: '2-2.png',
              description: '•  New power system with cyber and physics integration \n'
            },
            {
              avatar: '2-3.png',
              description: '•  New electric machine and motor drive'
            }
          ]
        },
      cardInfo2:{
          title:'IMPORTANT PANELS',
          persons:[
            {
              avatar:'2-4.png',
              description:'•  Special Panel for Modern Power System'
            },
            {
              avatar: '2-5.png',
              description: '•  Special Panel for Female Scientists   '
            },
            {
              avatar: '2-6.png',
              description: '•  Special Panel for NSFC funds   '
            }
          ]
        }

    }
  }
}
</script>

<style scoped lang="scss">

.confer-zone{
  //width: 100%;
  //height: 900px;
  margin-top: 120px;
  margin-bottom: 156px;
  background-image: url("../../assets/images/home/bg1.png");
  padding: 0 100px;
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

.right-cards{
  position: relative;

  .time-card{
    position: relative;
    top:-30px;
  }

  .last-card{
    position: relative;
    top:40px
  }

  //&:last-child{
  //  position: relative;
  //  top:30px;
  //}
}

.card-date-list{
  list-style: url("../../assets/images/home/rec1.png");

  ul:first-child{
    color:#484AB5;
  }

  li{
    margin: 20px 0;
  }

  .date-item{
    display: block;
    font-size: 18px;
    font-family: PingFang SC;
    font-weight: 800;
  }

  .date-agenda{
    display: block;
    font-size: 16px;
    color: #666;
  }
}

.card-panel{
  list-style: none;
  padding: 0;

  li{
    display: flex;
    align-items: center;
    margin: 10px 0;
    height: 61px;

    .card-panel-description{
      margin-left: 20px;
      font-size: 14px;
      font-family: "PingFang SC";
      color: #666;
      line-height: 16px;
      width: 259px;
    }
  }
}

</style>

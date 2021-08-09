<template>
  <div style="width: 100%">


    <div class="back-img">
      <img :src="require('assets/images/keynote/logo.png')" alt="">
    </div>

    <div class="keynote-speakers">
      <el-row>
        <el-col :md="8" :sm="12" v-for="speaker in speakers1">
          <div class="speaker">
            <div class="speaker-avatar">
              <img :src="require('assets/images/keynote/'+speaker.avatar+'.png')" alt="">
            </div>
            <div class="speaker-name">{{speaker.name}}</div>
            <div class="speaker-affiliation">{{speaker.affiliation}}</div>
            <div class="speaker-intro">{{speaker.intro}}</div>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :md="8" :sm="12" v-for="speaker in speakers2">
          <div class="speaker">
            <div class="speaker-avatar">
              <img :src="require('assets/images/keynote/'+speaker.avatar+'.png')" alt="">
            </div>
            <div class="speaker-name">{{speaker.name}}</div>
            <div class="speaker-affiliation">{{speaker.affiliation}}</div>
            <div class="speaker-intro">{{speaker.intro}}</div>
          </div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
export default {
  name: "Keynote",
  data(){
    return{
      speakers1:[
        {
          avatar:'speaker1',
          name:'Jianbo Guo',
          affiliation:'(Fellow of China Engineering Academy)',
          intro:'Jianbo Guo as an Academician of Chinese Academy of Engineering, Senior Engineer at Professor Level，and Doctoral Tutor, Guo Jianbo works as the President of China Electric Power Research Institute entitled to the special allowance by the State Council. Mr. Guo has participated as the project leader in over 30 national projects including 7th FiveYear and 8th Five-Year plans, 973 Program, 863 Program,as well as key projects of NSFC and NDRC. Withmany technological innovation plans, 973 Program, 863 Program,as well as key projects of NSFC and NDRC. Withmany technological innovation achievements insimulation of power system planning, renewable energy generation and integration, etc., he has received several awards at state and ministerial levels.\n'
        },
        {
          avatar:'speaker2',
          name:'Yulong Ding',
          affiliation:'(Fellow of Royal Academy of Engineering)',
          intro:'Yulong Ding holds the founding Chamberlain chair of Chemical Engineering and Highview-RAEng chair of cryogenic energy storage and is director of Birmingham Centre for Energy Storage. His research has been cross-disciplinary in particular at the interface of chemical engineering, chemistry, energy engineering, materials science & engineering. He has been a principal and a co-investigator of projects with a total exceeding £20M over the past 10 years. He has published over 400  technical papers with over 9000 citations (H index ~ 42) and 10 book chapters. He was an in inventor of the cryogenic energy storage technology, which was awarded the 2011 ‘The Engineer’ magazine Energy & Environmental and Grand Prix awards, and 2012 Rushlight Energy Environmental and Power Generation and Transmission awards.'
        },
        {
          avatar:'speaker3',
          name:'Mohammad Shahidehpour',
          affiliation:'(Fellow of American Academy of Engineering)',
          intro:'Dr. Mohammad Shahidehpour joined Illinois Institute of Technology (Illinois Tech) in 1983 where he is presently a University Distinguished Professor. He also serves as the Bodine Chair Professor, Director of the Robert W. Galvin Center for Electricity Innovation, and Associate Director of the Wanger Institute for Sustainable Energy Research (WISER) at Illinois Tech. He is a Fellow of IEEE, Fellow of the American Association for the Advancement of Science (AAAS), Fellow of the National Academy of Inventors (NAI), Laureate of KIA (Khwarizmi International Award), and an elected member of the US National Academy of Engineering. He is listed as a highly cited researcher on the Web of Science (ranked in the top 1% by citations demonstrating significant influence among his peers). '
        },]
      ,
      speakers2:[
        {
          avatar:'speaker4',
          name:'Saifur Rahman',
          affiliation:'(Fellow of American Academy of Engineering)',
          intro:'Professor Saifur Rahman is the founding director of the Advanced Research Institute at Virginia Tech, USA, where he is the Joseph R. Loring professor of electrical and computer engineering. He also directs the Center for Energy and the Global Environment. He is a Life Fellow of the IEEE and an IEEE Millennium Medal winner. He was the president of the IEEE Power and Energy Society (PES) for 2018 and 2019. He was the founding editor-in-chief of the IEEE Electrification Magazine and the IEEE Transactions on Sustainable Energy. He is a distinguished lecturer for the IEEE Power & Energy Society and has lectured on renewable energy, energy  efficiency, smart grid, energy internet, blockchain, IoT sensor integration, etc. in over 30 countries. He has conducted several energy efficiency related projects for Duke Energy, Tokyo Electric Power Company, the US Department of Defense, the State of Virginia and the US Department of Energy.'
        },
        {
          avatar:'speaker5',
          name:'Goran Strbac',
          affiliation:'(Professor, Imperial College London)',
          intro:'Goran Strbac is a Professor of Energy Systems at Imperial College London. His current research interests include modelling and optimization of economic and security performance of energy system operation and investment, including analysis of future energy markets to support cost-effective transition to smart low carbon energy future. He is currently Leading Author in IPCC WG 3, Member of the UK Smart System Forum, Member of the Joint EU Programme in Energy Systems Integration of the European Energy Research Alliance.'
        },
        {
          avatar:'speaker6',
          name:'Wei Gu',
          affiliation:'(Professor, Southeast University)',
          intro:'Professor Gu is the vice dean of School of Electrical Engineering at Southeast University, China. He also is the director of the Institute of Distributed Generations and Active Distribution Networks and vice director of Power System Simulation Committee of China Simulation Federation. His research interests include power system simulation, distributed generations and microgrids, integrated energy system. Prof. Gu has participated as the project leader in 5 national projects including key projects of NSFC. He has received the first prize of China Simulation Federation Science and Technology Award and the Gold Medal of Geneva International Invention Exhibition.'
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.back-img{
  background-image: url("../assets/images/keynote/bcg.png");
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.keynote-speakers{
  margin: 50px 100px;

  .speaker{
    margin: 50px;

    .speaker-avatar,.speaker-name,.speaker-affiliation{
      text-align: center;
      font-family: FZYDZHJW;
      line-height: 17.4px;
      font-weight: bold;
    }

    .speaker-name{
      font-size: 19px;
      margin-top: 30px;
    }

    .speaker-affiliation{
      font-size: 13px;
      margin-bottom: 25px;
    }

    .speaker-intro{
      font-size: 12px;
      color: #666;
      font-weight: 400;
      line-height: 24px;
      opacity: 0.5;
      font-family: Microsoft YaHei;
    }
  }
}

</style>

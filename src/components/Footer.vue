<template>
  <div class="home-footer">
    <div>
      <el-row :gutter="60">
        <el-col :span="8">
          <div>
            <img
                :src="require('assets/images/quickLink.png')"
                alt="quick link"
                class="foot-img"
            >
          </div>
          <div class="quick-links">
            <div>
              <a href="#" @click="$router.push('/paper')">Call for Papers</a>
              <a v-for="quicklink in quickLinkData" :href="quicklink.link">
                {{quicklink.text}}
              </a>
            </div>
          </div>
        </el-col>

        <el-col :span="8">
          <div>
            <img
                :src="require('assets/images/contact1.png')"
                alt="quick link"
                class="foot-img"
            >
          </div>

          <!--  后续封装成组件，先这样写        -->
          <div class="contact-card">
            <div>
              <span class="contact-card-name">Wei Jiang</span>
              <span> (Conference Secretariat)</span>
            </div>
            <div>
              School of Electrical Engineering, Southeast University
            </div>
            <div>
              <span>TEL:(+86) 13813860619</span>
            </div>
          </div>

          <div class="contact-card">
            <div>
              <span class="contact-card-name">Hui Yang</span>
            </div>
            <div>
              School of Electrical Engineering, Southeast University
            </div>
            <div>
              <span>TEL:(+86) 15251867159</span>
            </div>
            <div>
              E-mail: ispec2021@csee.org.cn
            </div>
          </div>
        </el-col>

        <el-col :span="7" style="margin-left: 20px">
          <div>
            <img
                :src="require('assets/images/contact1.png')"
                alt="quick link"
                class="foot-img"
            >
          </div>

          <div class="contact-card">
            <div>
              <span class="contact-card-name">Min Liu</span>
            </div>
            <div>
              Chinese Society for Electrical Engineering
            </div>
            <div>
              <span>TEL: 010-63416782</span><span>, (+86) 15251867159</span>
            </div>
            <div>
              E-mail: min-liu@csee.org.cn
            </div>
          </div>
        </el-col>

      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data(){
    return{
      quickLinkData:[
        {
          text:'Full Paper Template',
          link:'',
        },
        {
          text:'Presentation Template',
          link:'',
        },
        {
          text:'Poster Template',
          link:'',
        },
        {
          text:'Certificate of Acceptance',
          link:'',
        },
        {
          text:'iSPEC2020 Video Playback',
          link:'https://i.printhappy.cn/server/catalog.php?id=30',
        },
        {
          text:'iSPEC 2020',
          link:'http://ieee-spec.csee.org.cn/2020/',
        },
        {
          text:'Southeast University',
          link:'https://www.seu.edu.cn/',
        },
        {
          text:'SEU School of Electrical Engineering',
          link:'https://ee.seu.edu.cn/',
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.home-footer{
  //height: 460px;
  background-color: #999999;

  &>div{
    margin: 50px 100px;
  }
}

.foot-img{
  margin-top: 66px;
  margin-bottom: 39px;
}

.quick-links{

  &>div{
    font-size: 14px;
    color: #fff;
    font-family: PingFang SC;
    margin: 3px 0;
    line-height: 24px;

    a{
      display: block;
      text-decoration: none;
      color: #fff;
      :visited{
        color: #FFF100;
      }
    }

  }
}

.contact-card{
  font-family: "PingFang SC";
  font-size: 14px;
  color: white;
  margin-bottom: 36px;

  .contact-card-name{
    font-weight: bold;
  }
}

</style>

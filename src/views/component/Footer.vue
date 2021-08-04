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
            <div style="color:#FFF100 ">
              <span>
                Call for papers
              </span>
            </div>
            <div v-for="item in quickLinkData">
              <span>
                {{item}}
              </span>
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
              <sup>TEL</sup><span>ephone:(+86) 13813860619</span>
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
              <sup>TEL</sup><span>:(+86) 15251867159</span>
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
              <sup>TEL</sup><span>: 010-63416782</span><span>, (+86) 15251867159</span>
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
        "Full paper template",
        "Presentation template",
        "Poster template",
        "Certificate of Acceptance",
        "iSPEC2020 Video Playback",
        "iSPEC 2020 ",
        "Southeast University",
        "SEU School of Electrical Engineering",
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.home-footer{
  height: 460px;
  background-color: #999999;

  &>div{
    margin: 50px 360px;
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

    span{
      cursor: pointer;
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

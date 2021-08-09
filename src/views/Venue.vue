<template>
  <div style="width: 100%">
    <div class="back-img">
      <img :src="require('assets/images/venue/conferenceVenue.png')" alt="">
    </div>

    <div class="accomodation">
      <div class="accomodation-main">

        <div class="hotel-panel">
          <div class="hotel-text">
            <div>Crowne Plaza Nanjing Jiangning （南京银城皇冠假日酒店）</div>
            <div>Tel: (86) 25 8103 8888 </div>
            <div>Fax: (86) 25 8103 8555 </div>
            <div>Email: reservation@crowneplazajiangning.com</div>
          </div>
          <div class="hotel-img">
            <el-row>
              <el-col :md="12" :sm="24">
                <img :src="require('assets/images/venue/hotel1.png')" alt="hotel">
              </el-col>

              <el-col  :md="12" :sm="24">
                <img :src="require('assets/images/venue/hotel2.png')" alt="hotel">
              </el-col>
            </el-row>
          </div>
        </div>

        <div class="address-panel">

          <div class="hotel-address">
            <div>Hotel Address</div>
            <div>No. 9 Jiahu East Rd, Jiang Ning District, Nanjing, 211100, P.R. China </div>
            <div>中国江苏省南京市江宁区佳湖东路9号 </div>
          </div>

          <div class="hotel-transport">
            <el-row>
              <el-col :span="5">
                <span class="trans-title">Hotel Transportation</span>
              </el-col>

              <el-col :span="19">
                <ul>
                  <li v-for="item in transportations">
                    {{item}}
                  </li>
                </ul>
              </el-col>
            </el-row>

            <div class="map">
              <img :src="require('assets/images/venue/map.png')" alt="map">
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Venue",
  data(){
    return{
      transportations:[
          'Nanjing South Railway Station: The distance is 4.6 km and taxi service is around 15 RMB',
          'Nanjing Railway Station: The distance is 18.4 km and taxi service is around 48 RMB',
          'Nanjing Lukou International Airport: The distance is 30 km and taxi service is around 120 RMB'
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.back-img{
  background-image: url("../assets/images/venue/bcg1.png");
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.accomodation{
  width: 100%;
  background-image: url("../assets/images/venue/bcg2.png");
  //height: 1530px;
  margin: 71px 0;
  padding-top: 1px;

  .accomodation-main{
    margin: 0 100px;

    .hotel-panel{
      margin: 56px 0 71px 0;
      padding: 40px 60px;
      background:rgba(255,255,255,0.8);
      //opacity: 0.8;

      .hotel-text{
        font-family: FZZCHJW;
        line-height:24px;

        :first-child{
          font-weight: bold;
        }
      }

      .hotel-img{
        margin-top: 40px;
        text-align: center;
        //display: flex;
        //justify-content: space-between;

        //&>div{
        //  background-color: #fff;
        //  opacity: 1;
        //}
      }
    }

    .address-panel{
      background:rgba(255,255,255,0.8);
      padding: 40px 60px;

      .hotel-address{
        font-family: Adobe Heiti Std;
        line-height:24px;
        :first-child{
          font-weight: 600;
        }
      }

      .hotel-transport{
        margin-top: 47px;

        ul{
          margin: 0;
          color: #000;
          opacity: 0.5;
        }

        .map{
          display: flex;
          justify-content: center;
          margin: 40px 0;
        }
      }
    }
  }
}

.trans-title{
  font-size: 18px;
  font-family: Adobe Heiti Std;
  font-weight: bold;
}


</style>

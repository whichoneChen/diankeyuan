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
              <img :src="require('assets/images/venue/hotel1.png')" alt="hotel">
              <img :src="require('assets/images/venue/hotel2.png')" alt="hotel">
          </div>
        </div>
      </div>
    </div>

    <div class="address">
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Venue"
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
  height: 1530px;
  margin: 71px 0;
  padding-top: 1px;

  .accomodation-main{
    margin: 0 410px;

    .hotel-panel{
      margin: 56px 0 71px 0;
      padding: 40px 60px;
      background:rgba(255,255,255,0.8);
      //opacity: 0.8;

      .hotel-text{
        font-family: FZZCHJW;

        :first-child{
          font-weight: bold;
        }
      }

      .hotel-img{
        margin-top: 40px;
        display: flex;
        justify-content: space-between;

        &>div{
          background-color: #fff;
          opacity: 1;
        }
      }
    }
  }
}
</style>

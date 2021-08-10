<template>
  <div class="contact">
    <div class="contact-box">
      <div class="logo">
        <img :src="require('assets/images/contact/logo.png')" alt="">
      </div>
      <div class="secretariats">
        <div class="secre-title">Conference Secretariat</div>
        <div v-for="secretariat in secretariats" class="secre-info">
          <div class="secre-name">{{secretariat.name}}</div>
          <div>{{secretariat.affiliation}}</div>
          <div>{{secretariat.tele}}</div>
          <div>{{secretariat.mail}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data(){
    return{
      secretariats:[
        {
          name:'Wei Jiang',
          affiliation:'School of Electrical Engineering, Southeast University',
          tele:'Tel: (+86) 13813860619',
          mail:'',
        },
        {
          name:'Hui Yang',
          affiliation:'School of Electrical Engineering, Southeast University',
          tele:'Tel: (+86) 15251867159',
          mail:'E-mail: ispec2021@csee.org.cn',
        },
        {
          name:'Min Liu',
          affiliation:'Chinese Society for Electrical Engineering',
          tele:'Tel: 010-63416782，(+86)18612868814',
          mail:'E-mail: min-liu@csee.org.cn',
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.contact{
  background-image: url("../assets/images/contact/bcg.png");
  background-size: 90% 100%;
  height: 1160px;
  display: flex;
  justify-content: center;
  align-items: center;

  .contact-box{
    background-color: #fff;
    opacity: 0.8;
    padding: 30px;

    .logo{
      padding: 5px;
      margin: 20px;
    }
  }

  .secretariats{
    text-align: center;
    font-size: 24px;
    font-family: PingFang;
    font-weight: 400;
    color: #333333;
    line-height: 30px;
    .secre-title{
      margin: 30px 0;
    }

    .secre-info{
      margin: 30px 0;

      .secre-name{
        font-weight:  bold;
      }
    }

  }
}
</style>

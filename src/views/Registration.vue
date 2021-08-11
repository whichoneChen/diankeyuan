<template>
  <div style="width: 100%">

    <div class="back-img">
      <img :src="require('assets/images/registration/logo.png')" alt="">
    </div>

    <div class="register-zone">
      <div class="reg-btn">
        <img :src="require('assets/images/registration/btn.png')" alt="" @click="register">
      </div>

      <div class="reg-text">
        <div class="reg-fee">Registration Fee</div>
        <div style="margin-bottom: 50px">
          According to the requirements of the prevention and control of the novel coronavirus epidemic, the conference
          provides
          two types of participation: In-person Meeting and Virtual Meeting. The authors from non-high-risk areas in
          China are
          required to register for the In-person Meeting, while international delegates and representatives from
          high-risk areas in
          China are required to register for the Virtual Meeting. Other participants (non-authors) from non-high-risk
          areas in China
          are welcome to register for the web conference.
        </div>
        <div>
          Delegates attending In-person Meeting should cooperate in implementing relevant requirements on prevention and
          control
          at the conference venue, including temperature detection, wearing masks and other cleaning and disinfection
          measures.
        </div>
      </div>

    </div>

    <div class="fee-tables">
      <div>The conference registration fee includes: participation in all conferences, conference dinning, conference
        kit, delegate
        badge, conference guide and conference USB flash drive.
      </div>
      <br/>
      <div>
        In-person Meeting registration fees are as follows (paper authors, representatives from non-high-risk areas in
        China).
      </div>

      <div>
        <img :src="require('assets/images/registration/table1.png')" alt="" />
      </div>
      <div>
        Virtual Meeting registrations are as follows (for international delegates and delegates from medium- and high-risk areas in
        China only).
      </div>
      <div>
        <img :src="require('assets/images/registration/table2.png')" alt="">
      </div>

      <div class="notes">
        <div>
          <div>*Member price applies to both IEEE members and CSEE members.</div>
          <div>Contact Information: 0086-010-63415741 or <a href="mailto:gjb@csee.org.cn">gjb@csee.org.cn</a> </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "Registration",
  methods:{
    register(){
      console.log("register now!");
    }
  }
}
</script>

<style scoped lang="scss">
.back-img{
  background-image: url("../assets/images/registration/bgc1.png");
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.register-zone{
  border-top: 1px solid white;
  background-image: url("../assets/images/registration/bgc2.png");
  height: 448px;
  margin:  100px 0;

  .reg-btn{
    margin: 50px 0 10px 0;
    display: flex;
    justify-content: center;

    img{
      cursor: pointer;
    }
  }

  .reg-text{
    margin: 30px 200px;
    color: #fff;
    font-size: 18px;
    font-family: PingFang;
    font-weight: lighter;
    line-height: 20px;

    .reg-fee{
      font-size: 24px;
      font-family: FZYDZHJW;
      font-weight: normal;
      color: #FFFFFF;
      line-height: 24px;
      margin: 30px 0;
    }
  }
}

.fee-tables{
  margin: 50px 200px;
  font-size: 18px;
  font-family: PingFang;
  font-weight: 400;
  color: #666666;
  line-height: 25px;

  img{
    margin: 50px 0;
  }

  .notes{
    display: flex;
    justify-content: center;

    a{
      color:#17AFD4;
      text-decoration: none
    }
  }
}
</style>

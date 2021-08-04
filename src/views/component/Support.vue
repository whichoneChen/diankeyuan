<template>
  <div>
    <div style="height: 217px;margin: 156px 0">
      <div class="host-side">
        <img :src="require('assets/images/home/host.png')" alt="host" id="host-img">
        <img :src="require('assets/images/home/grid.png')" alt="host" id="grid-img">
        <img :src="require('assets/images/home/dongnan.png')" alt="host" id="dongnan-img">
      </div>

      <div class="support-side">
        <img :src="require('assets/images/home/supporters.png')" alt="supporter" id="sup-img">
        <img :src="require('assets/images/home/qinghua.png')" alt="supporter" id="qinghua-img">
        <img :src="require('assets/images/home/hehai.png')" alt="supporter" id="hehai-img">
      </div>
    </div>

    <div class="media-supporter">
      <div>
        <img :src="require('assets/images/home/media.png')" alt="media supporters">
      </div>
      <div>
        <img :src="require('assets/images/home/five.png')" alt="five supporters">
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "Support"
}
</script>

<style scoped lang="scss">
.host-side{
  display: inline-block;
  height: 100%;
  width: 962px;
  margin-right: 11px;
  position: relative;
  background-color: #16abd2;

  #host-img{
    position: absolute;
    top:27px;
    left:489px;
  }

  #dongnan-img{
    position: absolute;
    top:99px;
    left:406px;
  }

  #grid-img{
    position: absolute;
    top:99px;
    left: 623px;
  }
}

.support-side{
  display: inline-block;
  height: 100%;
  position: relative;
  width: 940px;
  background-color: #16abd2;

  #sup-img{
    position: absolute;
    top: 31px;
    left: 217px;
  }

  #qinghua-img{
    position: absolute;
    top: 98px;
    left: 163px;
  }

  #hehai-img{
    position: absolute;
    top: 98px;
    left: 445px;
  }
}

.media-supporter{

  margin-bottom: 40px;

  div{
    text-align: center;
  }
}

</style>

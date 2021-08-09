<template>
  <div class="my-card">
    <span class="my-card-title">
      <slot name="title" ></slot>
    </span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Card"
}
</script>

<style scoped lang="scss">
.my-card{
  background-color: #fff;
  z-index: 10;
  height: 255px;
  width: 429px;
  margin-bottom: 24px;
  box-shadow: 0px 0px 24px 0px rgba(153, 153, 153, 0.82);
  padding: 12px 30px 15px 59px;

  .my-card-title{
    font-size: 30px;
    font-family: "PingFang SC";
    font-weight: 800;
    color: #333333;
    display: inline-block;
  }
}

</style>

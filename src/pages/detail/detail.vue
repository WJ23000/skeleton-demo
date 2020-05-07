<template>
    <div class="detail">
        <div @click="toIndex()">回到首页</div>
        <div>num：{{num}}</div>
    </div>
</template>

<script>
  import detail from "./detail";
  export default detail;
</script>

<style scoped>
  @import './detail.less'
</style>

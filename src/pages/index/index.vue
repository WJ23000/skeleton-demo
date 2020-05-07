<template>
    <div class="index">
        <div @click="toDetail()">跳转到详情页</div>
        <div>num：{{num}}</div>
    </div>
</template>

<script>
  import index from "./index";
  export default index;
</script>

<style scoped>
  @import './index.less'
</style>

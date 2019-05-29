<template>
  <div class="index-home">
    <home-header></home-header>
    <div class="index-home__content">
      <span style="color: #999;">自定义内容</span>
    </div>
  </div>
</template>

<script>
import homeHeader from './header'

export default {
  components: {
    homeHeader
  }
}
</script>

<style>
.index-home{
  height: 100vh;
}
.index-home__content{
  padding-top: 300px;
  text-align: center;
}
</style>

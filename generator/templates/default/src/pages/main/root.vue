<template>
  <div>
    <span>{{message}}</span>
    <home></home>
  </div>
</template>

<script>
import home from './views/home'

export default {
  components: {
    home
  },
  data () {
    return {
      message: 'App'
    }
  }
}
</script>

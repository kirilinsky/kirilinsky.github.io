<template>
  <div id="app">
    <div id="nav">
        <h1>Router</h1> |
      <router-link v-for="item in links" :title="item.title" :to="item.url">
        {{ item.title }}
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
body
  margin 0
  padding 0
#nav
  display flex
  align-items center
  justify-content space-around
  box-shadow 0 0 5px grey,1px 0 1px black
  margin-bottom 20px
  width 100%
  height 65px
  background #ccc
  h1
    color white
  a
    font-weight bold
    color #2c3e50
    text-decoration none
    &.router-link-exact-active
      color #42b983
</style>

<script>
export default {
  data(){
    return {
      links: [
        { title: 'Home', url:'/'},
        { title: 'Default', url: '/default'},
        { title: 'About', url: '/about'}
      ]
    }
  }
}
</script>




